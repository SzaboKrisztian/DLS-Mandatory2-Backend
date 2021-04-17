import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { AccountServiceHandlers } from
    "../../protoOutput/ts/accountService/AccountService"
import { ProtoGrpcType as AccountServiceType } from
    "../../protoOutput/ts/accountService"
import { CreateData } from
    "../../protoOutput/ts/accountService/CreateData"
import { UpdateData } from
    "../../protoOutput/ts/accountService/UpdateData"
import { Person } from
    "../../protoOutput/ts/accountService/Person"
import { DeleteReq } from
    "../../protoOutput/ts/accountService/DeleteReq"
import { DeleteRes } from
    "../../protoOutput/ts/accountService/DeleteRes"
import { ResetPassReq } from
    "../../protoOutput/ts/accountService/ResetPassReq"
import { ResetPassRes } from
    "../../protoOutput/ts/accountService/ResetPassRes"

import { getManager, getCustomRepository } from "typeorm";
import {
    Account,
    Course,
    RollCall,
    Presence,
    Student,
    Teacher
} from "../entity";
import {
    ensureAccount,
    ensureStudent,
    ensureTeacher,
    ensureAdmin,
} from "../utils";
import {
    AccountRepository,
    StudentRepository,
    TeacherRepository
} from "../repository";

async function isEmailTaken(email: string) {
    const manager = getManager();

    const account = await manager.findOne(Account, {
        where: { email }
    });
    
    return account !== undefined;
}

export const accountHandlers: AccountServiceHandlers = {
    async CreateStudent(
        call: grpc.ServerUnaryCall<CreateData, Person>,
        callback: grpc.sendUnaryData<Person>
    ) {
        const admin = await ensureAdmin(call, callback);
        if (!admin) return;

        const { firstName, lastName, email, password } = call.request;
        if (!firstName || !lastName || !email || !password) {
            callback({
                code: grpc.status.INVALID_ARGUMENT,
                message: "Missing expected parameters."
            });
            return;
        }
        if (await isEmailTaken(email)) {
            callback({
                code: grpc.status.ALREADY_EXISTS,
                message: "The email address is already in use."
            });
            return;
        }

        const studentRepo = getCustomRepository(StudentRepository);
        try {
            const student = await studentRepo.create(
                firstName, lastName, email, password);
            callback(null, {
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName,
                courses: [],
                accountId: student.account.id,
                email: student.account.email
            });
        } catch(err) {
            callback({
                code: grpc.status.INTERNAL,
                message: "Error creating student."
            });
        }
    },

    async UpdateStudent(
        call: grpc.ServerUnaryCall<UpdateData, Person>,
        callback: grpc.sendUnaryData<Person>
    ) {
        const admin = await ensureAdmin(call, callback);
        if (!admin) return;

        const { id, firstName, lastName, email } = call.request;
        const manager = getManager();
        const student = await manager.findOne(Student, {
            where: { id },
            relations: ["account"]
        });

        if (!student) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Student not found."
            });
        }

        student.firstName = firstName ? firstName : student.firstName;
        student.lastName = lastName ? lastName : student.lastName;
        student.account.email = email ? email : student.account.email;
        await student.save()

        callback(null, {
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            courses: student.courses,
            accountId: student.account.id,
            email: student.account.email
        });
    },

    async DeleteStudent(
        call: grpc.ServerUnaryCall<DeleteReq, DeleteRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        const admin = await ensureAdmin(call, callback);
        if (!admin) return;

        const { id } = call.request;
        const manager = getManager();
        const student = await manager.findOne(Student, {
            where: { id },
            relations: ["account"]
        });

        if (!student) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Student not found."
            });
        }

        try {
            await student.softRemove();
            callback(null);
        } catch (err) {
            callback({
                code: grpc.status.INTERNAL,
                message: "Error deleting student."
            });
        }
    },

    async CreateTeacher(
        call: grpc.ServerUnaryCall<CreateData, Person>,
        callback: grpc.sendUnaryData<Person>
    ) {
        const admin = await ensureAdmin(call, callback);
        if (!admin) return;

        const { firstName, lastName, email, password } = call.request;
        if (!firstName || !lastName || !email || !password) {
            callback({
                code: grpc.status.INVALID_ARGUMENT,
                message: "Missing expected parameters."
            });
            return;
        }
        if (await isEmailTaken(email)) {
            callback({
                code: grpc.status.ALREADY_EXISTS,
                message: "The email address is already in use."
            });
            return;
        }

        const teacherRepo = getCustomRepository(TeacherRepository);
        try {
            const teacher = await teacherRepo.create(
                firstName, lastName, email, password);
            callback(null, {
                id: teacher.id,
                firstName: teacher.firstName,
                lastName: teacher.lastName,
                courses: [],
                accountId: teacher.account.id,
                email: teacher.account.email
            });
        } catch(err) {
            callback({
                code: grpc.status.INTERNAL,
                message: "Error creating teacher."
            });
        }
    },

    async UpdateTeacher(
        call: grpc.ServerUnaryCall<UpdateData, Person>,
        callback: grpc.sendUnaryData<Person>
    ) {
        const admin = await ensureAdmin(call, callback);
        if (!admin) return;

        const { id, firstName, lastName, email } = call.request;
        const manager = getManager();
        const teacher = await manager.findOne(Teacher, {
            where: { id },
            relations: ["account"]
        });

        if (!teacher) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Teacher not found."
            });
        }

        teacher.firstName = firstName ? firstName : teacher.firstName;
        teacher.lastName = lastName ? lastName : teacher.lastName;
        teacher.account.email = email ? email : teacher.account.email;
        await teacher.save()
        
        callback(null, {
            id: teacher.id,
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            courses: teacher.courses,
            accountId: teacher.account.id,
            email: teacher.account.email
        });
    },

    async DeleteTeacher(
        call: grpc.ServerUnaryCall<DeleteReq, DeleteRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        const admin = await ensureAdmin(call, callback);
        if (!admin) return;

        const { id } = call.request;
        const manager = getManager();
        const teacher = await manager.findOne(Teacher, {
            where: { id },
            relations: ["account"]
        });

        if (!teacher) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Teacher not found."
            });
        }

        try {
            await teacher.softRemove();
            callback(null);
        } catch (err) {
            callback({
                code: grpc.status.INTERNAL,
                message: "Error deleting teacher."
            });
        }
    },

    async ResetPassword(
        call: grpc.ServerUnaryCall<ResetPassReq, ResetPassRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        const admin = await ensureAdmin(call, callback);
        if (!admin) return;

        const { accountId, newPass } = call.request;
        const accountRepo = getCustomRepository(AccountRepository);

        try {
            await accountRepo.changePassword(accountId, newPass);
            callback(null);
        } catch (err) {
            callback({
                code: grpc.status.INTERNAL,
                message: "Error changing password."
            });
        }
    }
}

const packageDef = protoLoader.loadSync(
    __dirname + "/../../proto/accountService.proto"
);
export const accoutServiceProto = (grpc.loadPackageDefinition(
    packageDef) as unknown) as AccountServiceType;