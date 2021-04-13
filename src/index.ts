import "reflect-metadata";

const envVars = require('dotenv').config();

if (envVars.error) {
    throw envVars.error;
}

import { createConnection } from "typeorm";
import { Student } from "./entity/Student";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from '@grpc/proto-loader';
import { ensureUser } from "./utils";

import { authServiceProto, authHandlers } from './services/authService';
import { ProtoGrpcType as GrpcTestType } from '../proto/grpcTest';
import { GrpcTestHandlers } from '../proto/grpcTest/GrpcTest';
import { Request } from '../proto/grpcTest/Request';
import { Reply } from '../proto/grpcTest/Reply';

const testServer: GrpcTestHandlers = {
    async TestNoAuth(
        call: grpc.ServerUnaryCall<Request, Reply>,
        callback: grpc.sendUnaryData<Reply>
    ) {
        console.info('TestNoAuth called');
        callback(null, { message: `You sent: ${call.request.arg}` });
    },

    async TestAuth(
        call: grpc.ServerUnaryCall<Request, Reply>,
        callback: grpc.sendUnaryData<Reply>
    ) {
        const user = await ensureUser(call, callback);
        if (!user) return;
        console.info('TestAuth called with creds:', user);
        callback(null, { message: `You sent: ${call.request.arg}`});
    },

    async TestAuthAdmin(
        call: grpc.ServerUnaryCall<Request, Reply>,
        callback: grpc.sendUnaryData<Reply>
    ) {
        const user = await ensureUser(call, callback, true);
        if (!user) return;
        console.info('TestAuthAdmin called with creds:', user);
        callback(null, { message: `You sent: ${call.request.arg}`});
    }
}

function createServer() {
    const packageDef = protoLoader.loadSync(__dirname + '/../proto/grpcTest.proto');
    const proto = (grpc.loadPackageDefinition(packageDef) as unknown) as GrpcTestType;
    const server = new grpc.Server();

    server.addService(proto.grpcTest.GrpcTest.service, testServer);
    server.addService(authServiceProto.authService.AuthService.service, authHandlers);

    return server;
}

if (require.main === module) {
    createConnection()
        .then(async (db) => {
            // console.log("Inserting a new user into the database...");
            // const user = new Student();
            // user.firstName = "Timber";
            // user.lastName = "Saw";
            // await db.manager.save(user);
            // console.log("Saved a new user with id: " + user.id);

            // console.log("Loading users from the database...");
            // const users = await db.manager.find(Student);
            // console.log("Loaded users: ", users);

            // console.log("Test:", JSON.stringify(await Student.findOne()));

            // console.log(
            //     "Here you can setup and run express/koa/any other framework."
            // );

            const server = createServer();
            server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
                if (err) {
                    throw err;
                }
                console.log(`Server listening on ${port}`);
                server.start();
            });
        })
        .catch((err) => console.error(err));
}
