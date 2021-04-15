import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import * as dates from "date-fns";
import * as util from "util";
import { v4 as generateUuid } from 'uuid';

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
    Course,
    RollCall,
    Presence,
} from "../entity";
import { ensureStudent, ensureTeacher } from "../utils";

const CODE_EMIT_INTERVAL = parseInt(process.env.CODE_EMIT_INTERVAL, 10) || 2000;
const NUM_VALID_CODES_REQUIRED = parseInt(process.env.NUM_VALID_CODES_REQUIRED, 10) || 3;
const NUM_CODES_TO_CHECK = parseInt(process.env.NUM_CODES_TO_CHECK, 10) || 15;

interface RollCallEntry {
    rollCall: RollCall,
    presences: { [studentId: string]: boolean }
    courseId: number,
    startedBy: number,
    codes: string[],
    interval: NodeJS.Timer | null,
    call: grpc.ServerWritableStream<StartRollCallReq, RpcCode> | grpc.ServerWritableStream<ReattachReq, RpcCode>,
    end: () => void
}

const rollCalls: { [id: string]: RollCallEntry } = {};

const codeSubmissions: {
    [rollCallId: string]: {
        [studentId: string]: {
            code: string,
            index: number
        }[]
    }
} = {};

setInterval(() => {
    Object.keys(rollCalls).forEach(key => {
        if (rollCalls[key].call.cancelled) {
            clearInterval(rollCalls[key].interval);
            delete rollCalls[key];
            delete codeSubmissions[key];
            console.log(`Teacher lost during roll call id=${key}.`);
            printActiveRollCalls();
        }});
}, 666);

function printActiveRollCalls() {
    console.log("--------------------\nActive roll calls:");
    if (Object.keys(rollCalls).length > 0) {
        Object.keys(rollCalls).forEach(k => {
            console.log(`id: ${k}, courseId: ${rollCalls[k].courseId}, startedBy: ${rollCalls[k].startedBy}`);
        });
    } else {
        console.log("None.");
    }
    console.log("--------------------\n");
}

export const rollCallHandlers: RollCallServiceHandlers = {
    async StartRollCall(
        call: grpc.ServerWritableStream<StartRollCallReq, RpcCode>
    ) {
        const teacher = await ensureTeacher(call);
        if (!teacher) return;

        const { courseId, periodStart, periodEnd } = call.request;
        const periodStartDate = new Date(periodStart);
        const periodEndDate = new Date(periodEnd);

        const manager = getManager();
        const course = await manager.findOne(Course, {
            where: { id: courseId },
            relations: ["teachers", "students"]
        });

        if (!teacher || !course || (!teacher.admin 
            && !course.teachers.find(t => t.id === teacher.id))) {
                call.destroy({
                    code: grpc.status.PERMISSION_DENIED,
                    message: "Not allowed to start roll call for that course."
                } as any);
                return;
        }

        // Try to find a non-terminated roll call for courseId
        const found = await manager.findOne(RollCall, {
            where: {
                course: course,
                timeStopped: null
            }
        });
        if (found !== undefined) {
            call.destroy({
                code: grpc.status.PERMISSION_DENIED,
                message: "There's another active roll call for this course."
            } as any);
            return;
        }
        
        
        if (dates.isBefore(periodEndDate, periodStartDate)
            // Admins are allowed to start a roll call for any date / period
            // Teacher are only allowed to start a roll call for that particular date
            || (!teacher.admin && (!dates.isSameDay(periodStartDate, new Date())
            || !dates.isSameDay(periodStartDate, periodEndDate)))) {
                call.destroy({
                    code: grpc.status.INVALID_ARGUMENT,
                    message: "Invalid arguments."
                } as any);
                return;
        }

        const rollCall = manager.create(RollCall, { course, periodStart, periodEnd });
        await rollCall.save();

        const interval = setInterval(() => {
            const code = generateUuid();
            rollCalls[rollCall.id].codes.push(code);
            call.write({
                code,
                rollCallId: rollCall.id
            });
        }, CODE_EMIT_INTERVAL);

        rollCalls[rollCall.id] = {
            rollCall,
            presences: {},
            courseId: course.id,
            call,
            interval,
            codes: [],
            startedBy: teacher.id,
            end: () => {
                call.end();
                clearInterval(interval);
                delete rollCalls[rollCall.id];
                delete codeSubmissions[rollCall.id];
                rollCall.timeStopped = new Date();
                rollCall.save();
                console.log(`Roll call id=${rollCall.id} stopped.`);
                printActiveRollCalls();
            }
        }

        course.students.forEach(s => rollCalls[rollCall.id].presences[s.id] = false);

        codeSubmissions[rollCall.id] = {};

        console.log(`Roll call id=${rollCall.id} started.`);
        printActiveRollCalls();
    },

    async EndRollCall(
        call: grpc.ServerUnaryCall<EndRollCallReq, EndRollCallRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        const teacher = await ensureTeacher(call, callback);
        if (!teacher) return;

        const { rollCallId } = call.request;
        
        const manager = getManager();
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

        if (!rollCall.course.teachers.find(t => t.id === teacher.id) && !teacher.admin) {
            callback({
                code: grpc.status.PERMISSION_DENIED,
                message: "Not authorized to stop that roll call."
            });
            return;
        }

        if (rollCalls[rollCallId]) {    
            rollCalls[rollCallId].end();
            callback(null);
        } else {
            // The roll call can't be found in memory, so the
            // db entities should be closed manually
            rollCall.timeStopped = new Date();
            rollCall.save();
            callback(null);
        }
    },

    async ReattachToRollCall(
        call: grpc.ServerWritableStream<ReattachReq, RpcCode>
    ) {
        const teacher = await ensureTeacher(call);
        if (!teacher) return;

        const { rollCallId } = call.request;

        const manager = getManager();
        const rollCall = await manager.findOne(RollCall, {
            where: { id: rollCallId, timeStopped: null },
            relations: ["course", "course.teachers", "course.students"]
        });
        
        if (rollCalls[rollCallId] !== undefined) {
            call.destroy({
                code: grpc.status.PERMISSION_DENIED,
                message: "There is a teacher attached to this roll call."
            } as any);
            return;
        }

        if (!teacher || !rollCall
            || (!teacher.admin && (rollCall.course.teachers.find(
                t => t.id === teacher.id
            ) === undefined))) {
            call.destroy({
                code: grpc.status.PERMISSION_DENIED,
                message: "Invalid roll call."
            } as any);
            return;
        }

        const oldEntry = rollCalls[rollCall.id];
        const author = oldEntry ? oldEntry.startedBy : teacher.id;
        if (oldEntry) {
            clearInterval(oldEntry.interval);
        }

        const interval = setInterval(() => {
            const code = generateUuid();
            rollCalls[rollCall.id].codes.push(code);
            call.write({
                code,
                rollCallId: rollCall.id
            });
        }, CODE_EMIT_INTERVAL);

        rollCalls[rollCall.id] = {
            rollCall,
            presences: {},
            courseId: rollCall.course.id,
            call,
            interval,
            codes: [],
            startedBy: author,
            end: () => {
                call.end();
                clearInterval(interval);
                delete rollCalls[rollCall.id];
                delete codeSubmissions[rollCall.id];
                rollCall.timeStopped = new Date();
                rollCall.save();
                console.log(`Roll call id=${rollCall.id} stopped.`);
                printActiveRollCalls();
            }
        };

        rollCall.course.students.forEach(s => rollCalls[rollCall.id].presences[s.id] = false);
        const presences = await manager.find(Presence, {
            where: { rollCall },
            relations: ["student"]
        });
        presences.forEach(p => rollCalls[rollCall.id].presences[p.student.id] = true);

        codeSubmissions[rollCall.id] = {};

        console.log(`Reattached to roll call id=${rollCall.id}.`);
        printActiveRollCalls();
    },

    async ListRollCalls(
        call: grpc.ServerUnaryCall<ListRollCallsReq, ListRollCallsRes>,
        callback: grpc.sendUnaryData<ListRollCallsRes>
    ) {
        const teacher = await ensureTeacher(call, callback);
        if (!teacher) return;

        const manager = getManager();
        const rollCalls = await manager.find(RollCall, {
            where: { timeStopped: null },
            relations: ["course", "course.teachers"]
        });

        if (!teacher.admin) {
            const filteredRcs = rollCalls.filter(rc =>
                rc.course.teachers.find(t => t.id === teacher.id) !== undefined);
            callback(null, { rollCallIds: filteredRcs.map(rc => rc.id) });
        } else {
            callback(null, { rollCallIds: rollCalls.map(rc => rc.id) });
        }
    },

    async ValidateCode(
        call: grpc.ServerUnaryCall<RpcCode, ValidateRes>,
        callback: grpc.sendUnaryData<ValidateRes>
    ) {
        const student = await ensureStudent(call, callback);
        if (!student) return;

        const { code, rollCallId } = call.request;
        const manager = getManager();
        const rollCall = rollCalls[rollCallId].rollCall;

        if (!rollCalls[rollCallId]) {
            callback({ code: grpc.status.INTERNAL, message: "Invalid roll call." });
            return;
        }

        if (rollCalls[rollCallId].presences[student.id] !== false) {
            callback({
                code: grpc.status.INTERNAL,
                message: "You are not part of the course or have already been marked present." });
            return;
        }

        const subCodes = codeSubmissions[rollCallId];
        if (!subCodes[student.id]) {
            subCodes[student.id] = [];
        }
        const myCodes = subCodes[student.id];
        const codes = rollCalls[rollCallId].codes;

        if (myCodes.length === 0) {
            const start = codes.length < NUM_CODES_TO_CHECK ? 0
                : codes.length - NUM_CODES_TO_CHECK;
            const index = codes.indexOf(code, start);
            if (index === -1) {
                callback(null, {
                    valid: false,
                    numValidCodes: 0,
                    markedAsPresent: false
                });
            } else {
                myCodes.push({ code, index });
                callback(null, {
                    valid: true,
                    numValidCodes: 1,
                    markedAsPresent: false
                });
            }
        } else {
            const last = myCodes[myCodes.length - 1];
            if (codes.length > last.index + 1 && code === codes[last.index + 1]) {
                myCodes.push({ code, index: last.index + 1 });
                const numCorrect = myCodes.length;
                callback(null, {
                    valid: true,
                    numValidCodes: numCorrect,
                    markedAsPresent: numCorrect === NUM_VALID_CODES_REQUIRED
                });
                if (numCorrect === NUM_VALID_CODES_REQUIRED) {
                    rollCalls[rollCallId].presences[student.id] = true;
                    delete codeSubmissions[rollCallId][student.id];
                    const presence = manager.create(Presence);
                    presence.rollCall = rollCall;
                    presence.student = student;
                    presence.save();
                }
            } else {
                myCodes.splice(0, myCodes.length);
                callback(null, {
                    valid: false,
                    numValidCodes: 0,
                    markedAsPresent: false
                });
            }
        }
    }
}

const packageDef = protoLoader.loadSync(
    __dirname + "/../../proto/rollCallService.proto"
);
export const rollCallServiceProto = (grpc.loadPackageDefinition(
    packageDef
) as unknown) as RollCallServiceType;