import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

import { getCustomRepository, getRepository } from "typeorm";
import { AccountRepository } from "../repository/AccountRepository";
import { Account } from "../entity/Account";
import { AccessToken } from "../entity/AccessToken";

import { AuthServiceHandlers } from "../../protoOutput/ts/authService/AuthService";
import { ProtoGrpcType as AuthServiceType } from "../../protoOutput/ts/authService";
import { LoginRequest } from "../../protoOutput/ts/authService/LoginRequest";
import { LoginResponse } from "../../protoOutput/ts/authService/LoginResponse";

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
};

const packageDef = protoLoader.loadSync(
    __dirname + "/../../proto/authService.proto"
);
export const authServiceProto = (grpc.loadPackageDefinition(
    packageDef
) as unknown) as AuthServiceType;
