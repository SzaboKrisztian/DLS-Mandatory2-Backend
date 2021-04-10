import "reflect-metadata";
import { createConnection } from "typeorm";
import { Student } from "./entity/Student";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from '../proto/greeter';
import { GreeterHandlers } from '../proto/greeterTest/Greeter';
import { HelloRequest } from '../proto/greeterTest/HelloRequest';
import { HelloReply } from '../proto/greeterTest/HelloReply';

const greeterServer: GreeterHandlers = {
    SayHello(
        call: grpc.ServerUnaryCall<HelloRequest, HelloReply>,
        callback: grpc.sendUnaryData<HelloReply>
    ) {
        if (call.request) {
            console.log(`Got client message containing name: ${call.request.name}`);
        }
        callback(null, { message: `Hello there, ${call.request.name}` });
    }
}

function createServer() {
    const packageDef = protoLoader.loadSync(__dirname + '/../proto/greeter.proto');
    const proto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
    const server = new grpc.Server();

    server.addService(proto.greeterTest.Greeter.service, greeterServer);
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
