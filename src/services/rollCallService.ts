import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import * as dates from "date-fns";
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
import { MarkAsPresentReq }
    from "../../protoOutput/ts/rollCallService/MarkAsPresentReq";
import { MarkAsPresentRes }
    from "../../protoOutput/ts/rollCallService/MarkAsPresentRes";
import { RealTimePresences }
    from "../../protoOutput/ts/rollCallService/RealTimePresences";

import { getManager } from "typeorm";
import {
    Course,
    RollCall,
    Presence,
    Teacher
} from "../entity";
import { ensureStudent, ensureTeacher } from "../utils";

const CODE_EMIT_INTERVAL = parseInt(process.env.CODE_EMIT_INTERVAL, 10) || 2000;
const NUM_VALID_CODES_REQUIRED = parseInt(process.env.NUM_VALID_CODES_REQUIRED, 10) || 3;
const NUM_CODES_TO_CHECK = parseInt(process.env.NUM_CODES_TO_CHECK, 10) || 15;

interface RollCallEntry {
    rollCall: RollCall,
    presences: { [studentId: string]: boolean }
    courseId: number,
    startedBy: Teacher,
    codes: string[],
    interval: NodeJS.Timer | null,
    call: grpc.ServerWritableStream<StartRollCallReq, RpcCode> | grpc.ServerWritableStream<ReattachReq, RpcCode>,
    presenceStreams: grpc.ServerWritableStream<ReattachReq, RealTimePresences>[],
    emitPresence: (studentId: number) => void,
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
            console.log(`id: ${k}, courseId: ${rollCalls[k].courseId}, startedBy: ${rollCalls[k].startedBy.id}`);
        });
    } else {
        console.log("None.");
    }
    console.log("--------------------\n");
}

function rcToObj(rc: RollCall) {
    return { id: rc.id, courseId: rc.course.id }
}

function getStatus(rc: RollCall) {
    if (!rollCalls[rc.id]) {
        return [];
    }

    return rc.course.students.map(
        s => ({
            id: s.id,
            firstName: s.firstName,
            lastName: s.lastName,
            present: rollCalls[rc.id].presences[s.id]
        })
    )
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
            presenceStreams: [],
            emitPresence(studentId) {
                rollCalls[rollCall.id].presenceStreams = rollCalls[rollCall.id]
                    .presenceStreams.filter(c => !c.cancelled);
                rollCalls[rollCall.id].presenceStreams.forEach(c => {
                    c.write({ marked: studentId });
                });
            },
            interval,
            codes: [],
            startedBy: teacher,
            end() {
                rollCalls[rollCall.id].presenceStreams.forEach(c => c.end());
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
        const author = oldEntry ? oldEntry.startedBy : teacher;
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
            presenceStreams: [],
            emitPresence(studentId) {
                rollCalls[rollCall.id].presenceStreams = rollCalls[rollCall.id]
                    .presenceStreams.filter(c => !c.cancelled);
                rollCalls[rollCall.id].presenceStreams.forEach(c => {
                    c.write({ marked: studentId });
                });
            },
            interval,
            codes: [],
            startedBy: author,
            end() {
                const status = getStatus(rollCall);
                rollCalls[rollCall.id].presenceStreams.forEach(c => {
                    c.write({ students: status });
                    c.end();
                });
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
            callback(null, { rollCalls: filteredRcs.map(rcToObj) });
        } else {
            callback(null, { rollCalls: rollCalls.map(rcToObj) });
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
        
        if (!rollCalls[rollCallId]) {
            callback({ code: grpc.status.INTERNAL, message: "Invalid roll call." });
            return;
        }
        const rollCall = rollCalls[rollCallId].rollCall;

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
                    presence.markedBy = rollCalls[rollCallId].startedBy;
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
    },

    async MarkAsPresent(
        call: grpc.ServerUnaryCall<MarkAsPresentReq, MarkAsPresentRes>,
        callback: grpc.sendUnaryData<MarkAsPresentRes>
    ) {
        const teacher = await ensureTeacher(call, callback);
        if (!teacher) return;

        const { rollCallId, studentId } = call.request;

        const manager = getManager();
        const rollCall = await manager.findOne(RollCall, {
            where: { id: rollCallId },
            relations: ["course", "course.teachers", "course.students"]
        });
        if (!rollCall) {
            callback({
                code: grpc.status.INVALID_ARGUMENT,
                message: 'Invalid rollCallId'
            });
            return;
        }

        const student = rollCall.course.students.find(s => s.id === studentId);
        if (!student) {
            callback({
                code: grpc.status.INVALID_ARGUMENT,
                message: 'Invalid studentId'
            });
            return;
        }

        if (!teacher.admin && !rollCall.course.teachers.find(t => t.id === teacher.id)) {
            callback({
                code: grpc.status.PERMISSION_DENIED,
                message: 'Not authorized to mark presences on that course.'
            });
            return;
        }

        const presence = manager.create(Presence);
        presence.rollCall = rollCall;
        presence.student = student;
        presence.markedBy = teacher;
        presence.save();

        callback(null);
    },

    async GetRealTimePresences(
        call: grpc.ServerWritableStream<ReattachReq, RealTimePresences>
    ) {
        const teacher = await ensureTeacher(call);
        if (!teacher) return;

        const { rollCallId } = call.request;
        const manager = getManager();

        if (rollCalls[rollCallId] === undefined) {
            call.destroy({
                code: grpc.status.NOT_FOUND,
                message: "No such roll call in progress."
            } as any);
            return;
        }

        const rollCall = rollCalls[rollCallId].rollCall;
        if (!teacher.admin && !rollCall.course.teachers.find(
            t => t.id === teacher.id
        )) {
            call.destroy({
                code: grpc.status.PERMISSION_DENIED,
                message: "Not permitted to follow this roll call."
            } as any);
            return;
        }

        call.write({ students: getStatus(rollCall) });
        rollCalls[rollCallId].presenceStreams.push(call);
    },

    async ListActiveRollCalls(
        call: grpc.ServerUnaryCall<ListRollCallsReq, ListRollCallsRes>,
        callback: grpc.sendUnaryData<ListRollCallsRes>
    ) {
        const teacher = await ensureTeacher(call, callback);
        if (!teacher) return;

        const activeRollCalls = teacher.admin
            ? Object.keys(rollCalls)
                .map(k => ({
                    id: rollCalls[k].rollCall.id,
                    courseId: rollCalls[k].rollCall.course.id
                }))
            : Object.keys(rollCalls)
                .map(k => rollCalls[k].rollCall)
                .filter(rc => rc.course.teachers.find(t => t.id === teacher.id))
                .map(rcToObj);

        callback(null, { rollCalls: activeRollCalls });
    }
}

const packageDef = protoLoader.loadSync(
    __dirname + "/../../proto/rollCallService.proto"
);
export const rollCallServiceProto = (grpc.loadPackageDefinition(
    packageDef
) as unknown) as RollCallServiceType;