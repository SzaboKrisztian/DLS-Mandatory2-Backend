import * as grpc from "@grpc/grpc-js";
import * as jwt from "jsonwebtoken";
import { getManager } from "typeorm";
import { AccessToken, Account, Student, Teacher } from "../entity";

export async function ensureAccount(call: any, callback?: Function) {
    const metadata = call.metadata as grpc.Metadata;
    const tokens = metadata.get('authorization');
    if (tokens.length === 0) {
        const payload = {
            code: grpc.status.UNAUTHENTICATED,
            message: "No token supplied"
        };
        if (callback) {
            callback(payload);
        } else {
            call.destroy(payload);
        }
    } else {
        const manager = getManager();
        const receivedToken = tokens[0];
        const storedToken = await manager.findOne(AccessToken, {
            where: { token: receivedToken },
            relations: ["account"]
        });
        if (!storedToken) {
            const payload = {
                code: grpc.status.UNAUTHENTICATED,
                message: "Invalid token supplied"
            };
            if (callback) {
                callback(payload);
            } else {
                call.destroy(payload);
            }
        } else {
            const decoded = jwt.verify(storedToken.token, process.env.JWT_SECRET);
            if (!decoded) {
                const payload = {
                    code: grpc.status.UNAUTHENTICATED,
                    message: "Invalid token supplied"
                };
                if (callback) {
                    callback(payload);
                } else {
                    call.destroy(payload);
                }
            } else {
                return storedToken.account;
            }
        }
    }
}

export async function ensureStudent(call: any, callback?: Function) {
    const account = await ensureAccount(call, callback);
    if (account) {
        const manager = getManager();
        const student = await manager.findOne(Student, {
            where: { account },
            relations: ["account"]
        });
        if (!student) {
            const payload = {
                code: grpc.status.PERMISSION_DENIED,
                message: "Not authorized. Must be a student."
            };
            if (callback) {
                callback(payload);
            } else {
                call.destroy(payload);
            }
        } else {
            return student;
        }
    }
}

export async function ensureTeacher(call: any, callback?: Function) {
    const account = await ensureAccount(call, callback);
    if (account) {
        const manager = getManager();
        const teacher = await manager.findOne(Teacher, {
            where: { account },
            relations: ["account"]
        });
        if (!teacher) {
            const payload = {
                code: grpc.status.PERMISSION_DENIED,
                message: "Not authorized. Must be a teacher."
            };
            if (callback) {
                callback(payload);
            } else {
                call.destroy(payload);
            }
        } else {
            return teacher;
        }
    }
}

export async function ensureAdmin(call: any, callback?: Function) {
    const teacher = await ensureTeacher(call, callback);
    if (teacher) {
        if (!teacher.admin) {
            const payload = {
                code: grpc.status.PERMISSION_DENIED,
                message: "Not authorized. Must have admin privileges."
            };
            if (callback) {
                callback(payload);
            } else {
                call.destroy(payload);
            }
        } else {
            return teacher;
        }
    }
}

export async function getUserForAccount(account: Account) {
    const manager = getManager();
    const student = await manager.findOne(Student, {
        where: { account },
        relations: ["account"]
    });
    if (student) {
        return student;
    } else {
        const teacher = await manager.findOne(Teacher, {
            where: { account },
            relations: ["account"]
        });
        if (teacher) {
            return teacher;
        } else {
            return null;
        }
    }
}