import "reflect-metadata";

const envVars = require('dotenv').config();

if (envVars.error) {
    throw envVars.error;
}

import { createConnection } from "typeorm";
import * as grpc from "@grpc/grpc-js";

import { authServiceProto, authHandlers } from './services/authService';
import { rollCallServiceProto, rollCallHandlers } from "./services/rollCallService";
import { courseServiceProto, courseHandlers } from "./services/courseService";
import { accoutServiceProto, accountHandlers } from "./services/accountService";

function createServer() {
    const server = new grpc.Server();

    server.addService(
        authServiceProto.authService.AuthService.service,
        authHandlers
    );
    server.addService(
        rollCallServiceProto.rollCallService.RollCallService.service,
        rollCallHandlers
    );
    server.addService(
        courseServiceProto.courseService.CourseService.service,
        courseHandlers
    );
    server.addService(
        accoutServiceProto.accountService.AccountService.service,
        accountHandlers
    );

    return server;
}

if (require.main === module) {
    createConnection()
        .then(() => {
            const server = createServer();
            server.bindAsync(
                'localhost:50051',
                grpc.ServerCredentials.createInsecure(),
                (err, port) => {
                    if (err) {
                        throw err;
                    }
                    console.log(`Server listening on ${port}`);
                    server.start();
                }
            );
        }).catch((err) => console.error(err));
}
