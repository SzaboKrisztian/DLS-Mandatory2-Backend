import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import * as dates from "date-fns";
import * as util from "util";

import { RollCallServiceHandlers }
    from "../../protoOutput/ts/rollCallService/RollCallService";
import { ProtoGrpcType as RollCallServiceType }
    from "../../protoOutput/ts/rollCallService";
import { StartRollCallReq }
    from "../../protoOutput/ts/rollCallService/StartRollCallReq";
import { EndRollCallReq }
    from "../../protoOutput/ts/rollCallService/EndRollCallReq";
import { EndRollCallRes }
    from "../../protoOutput/ts/rollCallService/EndRollCallRes";
import { ValidateRes }
    from "../../protoOutput/ts/rollCallService/ValidateRes";
import { GetMyPresencesReq }
    from "../../protoOutput/ts/rollCallService/GetMyPresencesReq";
import { GetMyPresencesRes }
    from "../../protoOutput/ts/rollCallService/GetMyPresencesRes";
import { Code as RpcCode } 
    from "../../protoOutput/ts/rollCallService/Code";
import { ReattachReq }
    from "../../protoOutput/ts/rollCallService/ReattachReq";
import { ListRollCallsReq }
    from "../../protoOutput/ts/rollCallService/ListRollCallsReq";
import { ListRollCallsRes }
    from "../../protoOutput/ts/rollCallService/ListRollCallsRes";

import { getManager } from "typeorm";
import {
    RollCall,
    Code,
    Course,
    AccessToken,
    Teacher,
} from "../entity";
import { ensureUser } from "../utils";

interface RollCallEntry {
    courseId: number,
    startedBy: number,
    interval: NodeJS.Timer | null,
    call: grpc.ServerWritableStream<StartRollCallReq, RpcCode> | grpc.ServerWritableStream<ReattachReq, RpcCode>,
    end: () => void
}

const rollCalls: { [id: string]: RollCallEntry } = {};

setInterval(() => {
    Object.keys(rollCalls).forEach(key => {
        if (rollCalls[key].call.cancelled) {
            console.log("Teacher lost during roll call. Suspending code generation.");
            clearInterval(rollCalls[key].interval);
            delete rollCalls[key];
        }});
}, 2000);

export const rollCallHandlers: RollCallServiceHandlers = {
    async StartRollCall(
        call: grpc.ServerWritableStream<StartRollCallReq, RpcCode>
    ) {
        const manager = getManager();
        const token = call.metadata.get('authorization')
        const tokenEntry = await manager.findOne(AccessToken,
            { where: { token }, relations: ["account"] });
        const teacher = await manager.findOne(Teacher,
            { where: { account: tokenEntry.account } });
        const isAdmin = Boolean(teacher?.admin);

        const { courseId, periodStart, periodEnd } = call.request;
        const periodStartDate = new Date(periodStart);
        const periodEndDate = new Date(periodEnd);

        const course = await manager.findOne(Course, {
            where: { id: courseId },
            relations: ["teachers"]
        });
        // Try to find an interval (aka running rollCall) for courseId
        const foundInt = Object.keys(rollCalls).find(interval =>
            rollCalls[interval].courseId === courseId);
        
        // Admins are allowed to start a roll call for any date / period
        // Teacher are only allowed to start a roll call for that particular date
        if (!teacher || !course || dates.isBefore(periodEndDate, periodStartDate)
            || foundInt !== undefined 
            // If the teacher is not an admin, the teacher must be teaching that course
            || (!isAdmin && !course.teachers.find(t => t.id === teacher.id)
                || !dates.isSameDay(periodStartDate, new Date())
                || !dates.isSameDay(periodStartDate, periodEndDate))) {
            call.end();
            return;
        }

        const rollCall = manager.create(RollCall, { course, periodStart, periodEnd });
        await rollCall.save();

        const interval = setInterval(() => {
            const code = manager.create(Code, { rollCall });
            code.save().then(code2 => call.write({
                code: code2.code,
                rollCallId: rollCall.id
            })).catch(err => console.error(err));
        }, 2000);

        rollCalls[rollCall.id] = {
            courseId: course.id,
            call,
            interval,
            startedBy: teacher.id,
            end: () => {
                call.end();
                clearInterval(interval);
                delete rollCalls[rollCall.id];
                rollCall.timeStopped = new Date();
                rollCall.save();
                console.log(`Roll call id=${rollCall.id} stopped:`);
                console.log(util.inspect(rollCalls, {
                    showHidden: false,
                    depth: 1,
                    colors: true
                }));
                manager.delete(Code, { rollCall });
            }
        }

        console.log(`Roll call id=${rollCall.id} started:`);
        console.log(util.inspect(rollCalls, {
            showHidden: false,
            depth: 1,
            colors: true
        }));
    },

    async EndRollCall(
        call: grpc.ServerUnaryCall<EndRollCallReq, EndRollCallRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        const teacher = await ensureUser(call, callback, true) as Teacher;
        if (!teacher) return;

        const manager = getManager();

        const { rollCallId } = call.request;
        const rollCall = await manager.findOne(RollCall, {
            where: { id: rollCallId },
            relations: ["course", "course.teachers"]
        });
        if (!rollCall) {
            callback({
                code: grpc.status.INVALID_ARGUMENT,
                message: 'Invalid rollCallId'
            });
            return;
        }
        if (rollCalls[rollCallId]) {
            if (!teacher.admin && rollCalls[rollCallId].startedBy !== teacher.id) {
                callback({
                    code: grpc.status.PERMISSION_DENIED,
                    message: "Not authorized to stop another teacher's roll call."
                });
                return;
            }
            rollCalls[rollCallId].end();
            callback(null);
        } else {
            // The roll call can't be found in memory, so the
            // db entities should be closed manually
            if (!rollCall.course.teachers.find(t => t.id === teacher.id) && !teacher.admin) {
                callback({
                    code: grpc.status.PERMISSION_DENIED,
                    message: "Not authorized to stop another teacher's roll call."
                });
                return;
            }
            rollCall.timeStopped = new Date();
            rollCall.save();
            manager.delete(Code, { rollCall });
            callback(null);
        }
    },

    async ReattachToRollCall(
        call: grpc.ServerWritableStream<ReattachReq, RpcCode>
    ) {
        const manager = getManager();
        const token = call.metadata.get('authorization')
        const tokenEntry = await manager.findOne(AccessToken,
            { where: { token }, relations: ["account"] });
        const teacher = await manager.findOne(Teacher,
            { where: { account: tokenEntry.account } });
        const isAdmin = Boolean(teacher?.admin);
        const { rollCallId } = call.request;
        const rollCall = await manager.findOne(RollCall, {
            where: { id: rollCallId },
            relations: ["course", "course.teachers"]
        });
        
        if (!teacher || !rollCall
            || (!isAdmin && (rollCall.course.teachers.find(
                t => t.id === teacher.id
            ) === undefined))) {
            call.end();
            return;
        }       

        const oldEntry = rollCalls[rollCall.id];
        const author = oldEntry ? oldEntry.startedBy : teacher.id;
        if (oldEntry) {
            clearInterval(oldEntry.interval);
        }

        const interval = setInterval(() => {
            const code = manager.create(Code, { rollCall });
            code.save().then(code2 => call.write({
                code: code2.code,
                rollCallId: rollCall.id
            })).catch(err => console.error(err));
        }, 2000);

        rollCalls[rollCall.id] = {
            courseId: rollCall.course.id,
            call,
            interval,
            startedBy: author,
            end: () => {
                call.end();
                clearInterval(interval);
                delete rollCalls[rollCall.id];
                rollCall.timeStopped = new Date();
                rollCall.save();
                console.log(`Roll call id=${rollCall.id} stopped:`);
                console.log(util.inspect(rollCalls, {
                    showHidden: false,
                    depth: 1,
                    colors: true
                }));
            }
        };

        console.log(`Reattached to roll call id=${rollCall.id}:`);
        console.log(util.inspect(rollCalls, {
            showHidden: false,
            depth: 1,
            colors: true
        }));
    },

    async ListRollCalls(
        call: grpc.ServerUnaryCall<ListRollCallsReq, ListRollCallsRes>,
        callback: grpc.sendUnaryData<ListRollCallsRes>
    ) {
        const user = await ensureUser(call, callback, true);
        if (!user) return;

        const manager = getManager();
        const rollCalls = await manager.find(RollCall, {
            where: { timeStopped: null },
            relations: ["course", "course.teachers"]
        });

        if (!(user as Teacher).admin) {
            console.log(rollCalls);
            const filteredRcs = rollCalls.filter(rc =>
                rc.course.teachers.find(t => t.id === user.id) !== undefined);
            callback(null, { rollCallIds: filteredRcs.map(rc => rc.id) });
        } else {
            callback(null, { rollCallIds: rollCalls.map(rc => rc.id) });
        }
    },

    ValidateCode(
        call: grpc.ServerUnaryCall<RpcCode, ValidateRes>,
        callback: grpc.sendUnaryData<ValidateRes>
    ) {
        console.log(call.request);
    },

    GetMyPresences(
        call: grpc.ServerUnaryCall<GetMyPresencesReq, GetMyPresencesRes>,
        callback: grpc.sendUnaryData<GetMyPresencesRes>
    ) {
        console.log(call.request);
    }
}

const packageDef = protoLoader.loadSync(
    __dirname + "/../../proto/rollCallService.proto"
);
export const rollCallServiceProto = (grpc.loadPackageDefinition(
    packageDef
) as unknown) as RollCallServiceType;