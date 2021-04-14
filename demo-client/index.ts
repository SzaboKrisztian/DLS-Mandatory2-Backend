import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as fs from "fs";
import { ProtoGrpcType as AuthServiceType } from '../protoOutput/ts/authService';
import { ProtoGrpcType as GrpcTestType } from '../protoOutput/ts/grpcTest';
import { ProtoGrpcType as RollCallServiceType } from "../protoOutput/ts/rollCallService";

const SERVER_HOST = "localhost:50051";

function getTestClient() {
    const testPkg = protoLoader.loadSync(__dirname
        + '/../proto/grpcTest.proto');
    const testProto = (grpc.loadPackageDefinition(testPkg) as unknown) as GrpcTestType;
    return new testProto.grpcTest.GrpcTest(
        SERVER_HOST, 
        grpc.credentials.createInsecure()
    );
}

function getAuthClient() {
    const authPkg = protoLoader.loadSync(__dirname
        + '/../proto/authService.proto');
    const authProto = (grpc.loadPackageDefinition(authPkg) as unknown) as AuthServiceType;
    return new authProto.authService.AuthService(
        SERVER_HOST,
        grpc.credentials.createInsecure()
    );
}

function getRollCallClient() {
    const rollCallPkg = protoLoader.loadSync(__dirname
        + '/../proto/rollCallService.proto');
    const rollCallProto = (grpc.loadPackageDefinition(rollCallPkg) as unknown) as RollCallServiceType;
    return new rollCallProto.rollCallService.RollCallService(
        SERVER_HOST, 
        grpc.credentials.createInsecure()
    );
}

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

            const loginClient = getAuthClient();

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

            const testClient = getTestClient();

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

        case "startRollCall":
            const courseId = parseInt(process.argv[3], 10);
            if (Number.isNaN(courseId)) {
                console.error("Invalid courseId");
                process.exit(1);
            }
        
            const rollCallClient = getRollCallClient();

            const start = new Date();
            const end = new Date();
            end.setHours(end.getHours() + 1);

            const call = rollCallClient.startRollCall({
                courseId,
                periodStart: start.toISOString(),
                periodEnd: end.toISOString()
            }, metadata);

            call.on('data', function(code) {
                console.log(code);
            });
            call.on('error', function(error) {
                console.log(error);
            });
            call.on('end', function() {
                console.log("Stream ended");
            });
            break;

        case "endRollCall":
        case "reattach":
            const rollCallId = parseInt(process.argv[3], 10);
            if (Number.isNaN(rollCallId)) {
                console.error("Invalid roll call id");
                process.exit(1);
            }

            const rcClient = getRollCallClient();
            if (action === "endRollCall") {
                rcClient.EndRollCall({ rollCallId }, metadata, (err, res) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Roll call successfully stopped.");
                    }
                });
            } else {
                const call2 = rcClient.ReattachToRollCall({ rollCallId }, metadata);

                call2.on('data', function(code) {
                    console.log(code);
                });
                call2.on('error', function(error) {
                    console.log(error);
                });
                call2.on('end', function() {
                    console.log("Stream ended");
                });
            }
            break;

        case "list":
            getRollCallClient().ListRollCalls(null, metadata, (err, res) => {
                if (err) {
                    console.error(err);
                } else if (res) {
                    console.log(res);
                }
            });
            break;

        case "whoami":
            const authClient = getAuthClient();
            authClient.GetUser(null, metadata, (err, res) => {
                if (err) {
                    console.error(err);
                } else if (res) {
                    console.log(res);
                }
            })
            break;

        case "logout":
            getAuthClient().Logout({}, metadata, (err, res) => {
                if (err) {
                    console.error(err);
                } else if (res) {
                    console.log(res);
                    const creds = __dirname + "/creds.txt";
                    const stats = fs.statSync(creds);
                    if (stats) {
                        fs.unlinkSync(creds);
                    }
                }
            });
            break;

        default:
            console.error("Invalid action");
    }
} else {
    console.error("Invalid action");
}
