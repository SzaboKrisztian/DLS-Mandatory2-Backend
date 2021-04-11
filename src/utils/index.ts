import * as grpc from "@grpc/grpc-js";
import * as jwt from "jsonwebtoken";
import { getManager } from "typeorm";
import { AccessToken, Student, Teacher } from "../entity";

export async function ensureUser(call: any, callback: Function, adminRequired?: boolean) {

    const metadata = call.metadata as grpc.Metadata;
    const tokens = metadata.get('authorization');
    if (tokens.length === 0) {
        callback({
            code: grpc.status.UNAUTHENTICATED,
            message: "No token supplied"
        })
    } else {
        const manager = getManager();
        const receivedToken = tokens[0];
        const storedToken = await manager.findOne(AccessToken, { where: { token: receivedToken } });
        if (!storedToken) {
            callback({
                code: grpc.status.UNAUTHENTICATED,
                message: "Invalid token supplied"
            });
        } else {
            const decoded = jwt.verify(storedToken.token, process.env.JWT_SECRET);
            if (!decoded) {
                callback({
                    code: grpc.status.UNAUTHENTICATED,
                    message: "Invalid token supplied"
                });
            }
            const student = await manager.findOne(Student, { where: { account: { id: (decoded as any).userId } } });
            if (student) {
                if (adminRequired) {
                    callback({
                        code: grpc.status.PERMISSION_DENIED,
                        message: "Not authorized"
                    });
                } else {
                    return student;
                }
            } else {
                const teacher = await manager.findOne(Teacher, { where: { account: { id: (decoded as any).userId } } });
                if (adminRequired && !teacher.admin) {
                    callback({
                        code: grpc.status.PERMISSION_DENIED,
                        message: "Not authorized"
                    });
                } else {
                    return teacher;
                }
            }
        }
    }
}