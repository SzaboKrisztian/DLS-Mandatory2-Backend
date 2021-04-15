import "reflect-metadata";

const envVars = require('dotenv').config();

if (envVars.error) {
    throw envVars.error;
}

import { createConnection } from "typeorm";
import { Student } from "./entity/Student";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from '@grpc/proto-loader';
import { ensureAccount, ensureAdmin } from "./utils";

import { authServiceProto, authHandlers } from './services/authService';
import { rollCallServiceProto, rollCallHandlers } from "./services/rollCallService";
import { ProtoGrpcType as GrpcTestType } from '../protoOutput/ts/grpcTest';
import { GrpcTestHandlers } from '../protoOutput/ts/grpcTest/GrpcTest';
import { Request } from '../protoOutput/ts/grpcTest/Request';
import { Reply } from '../protoOutput/ts/grpcTest/Reply';

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
        const account = await ensureAccount(call, callback);
        if (!account) return;
        console.info('TestAuth called with creds:', account);
        callback(null, { message: `You sent: ${call.request.arg}`});
    },

    async TestAuthAdmin(
        call: grpc.ServerUnaryCall<Request, Reply>,
        callback: grpc.sendUnaryData<Reply>
    ) {
        const teacher = await ensureAdmin(call, callback);
        if (!teacher) return;
        console.info('TestAuthAdmin called with creds:', teacher.account);
        callback(null, { message: `You sent: ${call.request.arg}`});
    }
}

function createServer() {
    const packageDef = protoLoader.loadSync(__dirname + '/../proto/grpcTest.proto');
    const proto = (grpc.loadPackageDefinition(packageDef) as unknown) as GrpcTestType;
    const server = new grpc.Server();

    server.addService(proto.grpcTest.GrpcTest.service, testServer);
    server.addService(authServiceProto.authService.AuthService.service, authHandlers);
    server.addService(rollCallServiceProto.rollCallService.RollCallService.service, rollCallHandlers);

    return server;
}

if (require.main === module) {
    createConnection()
        .then(async (db) => {
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
