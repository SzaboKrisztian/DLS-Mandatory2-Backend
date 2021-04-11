import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as fs from "fs";
import { ProtoGrpcType as AuthServiceType } from '../proto/authService';
import { ProtoGrpcType as GreeterServiceType } from '../proto/greeter';

if (process.argv.length > 2) {
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
    switch(process.argv[2]) {
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
            const loginClient = new loginProto.authService.AuthService('localhost:50051', grpc.credentials.createInsecure());

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

        case "greet":
            if (process.argv.length < 4) {
                console.error("Too few arguments");
                console.info("Usage: yarn run client greet <name>");
                process.exit(1);
            }
            const name = process.argv[3];

            const greetPkg = protoLoader.loadSync(__dirname + '/../proto/greeter.proto');
            const greetProto = (grpc.loadPackageDefinition(greetPkg) as unknown) as GreeterServiceType;
            const greetClient = new greetProto.greeterTest.Greeter('localhost:50051', grpc.credentials.createInsecure());

            greetClient.SayHello({ name }, metadata, (err, res) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(res.message);
                }
            })
            break;

        default:
            console.error("Invalid action");
    }
} else {
    console.error("Invalid action");
}
