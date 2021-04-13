import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as fs from "fs";
import { ProtoGrpcType as AuthServiceType } from '../proto/authService';
import { ProtoGrpcType as GrpcTestType } from '../proto/grpcTest';

if (process.argv.length > 2) {
    const action = process.argv[2];
    const creds = {} as { token: string, userId: number };
    try {
        const content = JSON.parse(fs.readFileSync(__dirname + "/creds.txt").toString());
        if (!content.token || !content.userId) {
            throw new Error();
        }
        creds.token = content.token;
        creds.userId = content.userId;
        console.log("Credentials loaded.");
    } catch (err) {
        console.log("No credentials found.");
    }
    const metadata = new grpc.Metadata();
    if (creds.token) {
        metadata.add('authorization', creds.token);
    }
    switch(action) {
        case "login":
            if (process.argv.length < 5) {
                console.error("Too few arguments");
                console.info("Usage: yarn run client login <email> <password>");
                process.exit(1);
            }
            const email = process.argv[3];
            const password = process.argv[4];

            const loginPkg = protoLoader.loadSync(__dirname + '/../proto/authService.proto');
            const loginProto = (grpc.loadPackageDefinition(loginPkg) as unknown) as AuthServiceType;
            const loginClient = new loginProto.authService.AuthService(
                'localhost:50051',
                grpc.credentials.createInsecure()
            );

            loginClient.Login({ email, password }, (err, res) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Login successful: ", res);
                    fs.writeFileSync(__dirname + "/creds.txt", JSON.stringify(res));
                    console.log("Credentials written to file.");
                }
            });
            break;

        case "echo1":
        case "echo2":
        case "echo3":
            if (process.argv.length < 4) {
                console.error("Too few arguments");
                console.info("Usage: yarn run client echoX <name>");
                process.exit(1);
            }
            const arg = process.argv[3];

            const testPkg = protoLoader.loadSync(__dirname + '/../proto/grpcTest.proto');
            const testProto = (grpc.loadPackageDefinition(testPkg) as unknown) as GrpcTestType;
            const testClient = new testProto.grpcTest.GrpcTest(
                'localhost:50051', 
                grpc.credentials.createInsecure()
            );

            function cb(err, res) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(res.message);
                }
            }
            if (action === "echo1") {
                testClient.TestNoAuth({ arg }, metadata, cb);
            } else if (action === "echo2") {
                testClient.TestAuth({ arg }, metadata, cb);
            } else {
                testClient.TestAuthAdmin({ arg}, metadata, cb);
            }
            break;

        default:
            console.error("Invalid action");
    }
} else {
    console.error("Invalid action");
}
