import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as fs from "fs";
import { ProtoGrpcType as AuthServiceType } from '../protoOutput/ts/authService';
import { ProtoGrpcType as RollCallServiceType } from "../protoOutput/ts/rollCallService";
import { ProtoGrpcType as CourseServiceType } from "../protoOutput/ts/courseService";

const SERVER_HOST = "localhost:50051";

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

function getCourseClient() {
    const coursePkg = protoLoader.loadSync(__dirname
        + '/../proto/courseService.proto');
    const courseProto = (grpc.loadPackageDefinition(coursePkg) as unknown) as CourseServiceType;
    return new courseProto.courseService.CourseService(
        SERVER_HOST, 
        grpc.credentials.createInsecure()
    );
}

function logErrAndRes(err, res) {
    if (err) {
        console.log(err);
    }
    if (res) {
        console.log(res);
    }
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
            call.on('status', function(status) {
                console.log("Status: ", status);
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
                call2.on('status', function(status) {
                    console.log("Status: ", status);
                });
            }
            break;

        case "list":
            getRollCallClient().ListRollCalls(null, metadata, logErrAndRes);
            break;

        case "whoami":
            const authClient = getAuthClient();
            authClient.GetUser(null, metadata, logErrAndRes);
            break;
        
        case "validate":
            if (process.argv.length < 5) {
                console.error("Not enough arguemnts supplied");
                console.error("yarn run client validate <rollCallId> <code>");
                process.exit(1);
            }
            const rcId = parseInt(process.argv[3], 10);
            const code = process.argv[4];
            if (Number.isNaN(rcId)) {
                console.error("Invalid roll call id");
                process.exit(1);
            }
            getRollCallClient().ValidateCode(
                { code, rollCallId: rcId },
                metadata,
                (err, res) => {
                    if (err) {
                        console.error(err);
                    } else if (res) {
                        console.log(res);
                    }
                }
            );
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

        case "mycourses":
            getCourseClient().GetMyCourses(null, metadata, logErrAndRes);
            break;

        case "allstudents":
            getCourseClient().getAllStudents(null, metadata, logErrAndRes);
            break;

        case "allcourses":
            getCourseClient().getAllCourses(null, metadata, logErrAndRes);
            break;

        case "allteachers":
            getCourseClient().GetAllTeachers(null, metadata, logErrAndRes);
            break;

        case "courseTeachers":
        case "courseStudents":
            if (process.argv.length < 4) {
                console.error("Not enough arguemnts supplied");
                console.error(`yarn run client ${action} <courseId>`);
                process.exit(1);
            }
            
            const cId = parseInt(process.argv[3], 10);
            if (Number.isNaN(cId)) {
                console.error("Invalid courseId provided.");
                process.exit(1);
            }

            if (action === "courseStudents") {
                getCourseClient().GetStudentsForCourse(
                    { courseId: cId }, metadata, logErrAndRes);
            } else {
                getCourseClient().GetTeachersForCourse(
                    { courseId: cId }, metadata, logErrAndRes);
            }
            break;

        default:
            console.error("Invalid action");
    }
} else {
    console.error("Invalid action");
}
