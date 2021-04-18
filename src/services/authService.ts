import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

import { getCustomRepository, getRepository } from "typeorm";
import { AccountRepository, SALT_ROUNDS } from "../repository/AccountRepository";

import { AuthServiceHandlers } from "../../protoOutput/ts/authService/AuthService";
import { ProtoGrpcType as AuthServiceType } from "../../protoOutput/ts/authService";
import { LoginRequest } from "../../protoOutput/ts/authService/LoginRequest";
import { LoginResponse } from "../../protoOutput/ts/authService/LoginResponse";
import { LogoutResponse } from "../../protoOutput/ts/authService/LogoutResponse";
import { GetUserResponse } from "../../protoOutput/ts/authService/GetUserResponse";
import { ChangePasswordReq } from "../../protoOutput/ts/authService/ChangePasswordReq";
import { ChangePasswordRes } from "../../protoOutput/ts/authService/ChangePasswordRes";
import { ensureAccount, getUserForAccount } from "../utils";
import { AccessToken, Student, Teacher } from "../entity";

export const authHandlers: AuthServiceHandlers = {
    async Login(
        call: grpc.ServerUnaryCall<LoginRequest, LoginResponse>,
        callback: grpc.sendUnaryData<LoginResponse>
    ) {
        if (call.request && call.request.email && call.request.password) {
            const accRepo = getCustomRepository(AccountRepository);
            
            try {
                const account = await accRepo.findByEmail(call.request.email);
                if (!account) {
                    throw new Error("inner error: invalid email");
                }
                const matches = await bcrypt.compare(call.request.password, account.password);
                if (matches) {
                    const tokenRepo = getRepository(AccessToken);
                    jwt.sign({ userId: account.id }, process.env.JWT_SECRET, { expiresIn: "30 days" }, (err, token) => {
                        if (err) {
                            console.error("Error signing jwt token.");
                            callback({ code: grpc.status.INTERNAL, message: "Error signing jwt token" });
                        }
                        const accessToken = tokenRepo.create({ account, token });
                        accessToken.save();
                        callback(null, { userId: account.id, token });
                    });
                } else {
                    throw new Error("inner error: invalid password");
                }
            } catch (err) {
                console.error(err);
                callback({
                    code: grpc.status.NOT_FOUND,
                    message: "Invalid credentials"
                });
            }
        }
    },
    async Logout(
        call: grpc.ServerUnaryCall<Empty, LogoutResponse>,
        callback: grpc.sendUnaryData<LogoutResponse>
    ) {
        const metadata = call.metadata as grpc.Metadata;
        const token = metadata.get('authorization');

        if (!token) {
            callback({
                code: grpc.status.UNAUTHENTICATED,
                message: "You are not logged in."
            });
            return;
        }

        const tokenRepo = getRepository(AccessToken);
        const dbToken = await tokenRepo.findOne({ where: { token } });

        if (!dbToken) {
            callback({
                code: grpc.status.UNAUTHENTICATED,
                message: "Inalid token supplied."
            });
            return;
        }

        await dbToken.remove();
        callback(null, { message: "Successfully logged out." });
    },
    async GetUser(
        call: grpc.ServerUnaryCall<Empty, GetUserResponse>,
        callback: grpc.sendUnaryData<GetUserResponse>
    ) {
        const account = await ensureAccount(call, callback);
        if (!account) {
            return;
        }
        const user = await getUserForAccount(account);

        const isTeacher = user instanceof Teacher;
        const isAdmin = Boolean((user as Teacher)?.admin);
        let accId: number;
        if (isTeacher) {
            const teacherRepo = getRepository(Teacher);
            const teacher = await teacherRepo.findOne({
                where: { id: user.id },
                relations: ["account"]
            });
            accId = teacher.account.id;
        } else {
            const studentRepo = getRepository(Student);
            const student = await studentRepo.findOne({
                where: { id: user.id },
                relations: ["account"]
            });
            accId = student.account.id;
        }

        callback(null, {
            isTeacher,
            isAdmin,
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            accountId: accId
        });
    },
    async ChangePassword(
        call: grpc.ServerUnaryCall<ChangePasswordReq, ChangePasswordRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        const account = await ensureAccount(call, callback);

        const { oldPass, newPass } = call.request;
        const matches = await bcrypt.compare(oldPass, account.password);
        if (matches) {
            account.password = await bcrypt.hash(newPass, SALT_ROUNDS);
            await account.save();
            callback(null);
        } else {
            callback({
                code: grpc.status.INVALID_ARGUMENT,
                message: "Invalid password"
            });
        }
    }
};

const packageDef = protoLoader.loadSync(
    __dirname + "/../../proto/authService.proto"
);
export const authServiceProto = (grpc.loadPackageDefinition(
    packageDef
) as unknown) as AuthServiceType;
