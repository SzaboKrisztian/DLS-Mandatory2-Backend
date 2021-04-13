import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { RollCallServiceHandlers } from "../../protoOutput/ts/rollCallService/RollCallService";
import { ProtoGrpcType as RollCallServiceType } from "../../protoOutput/ts/rollCallService";
import { StartRollCallReq } from "../../protoOutput/ts/rollCallService/StartRollCallReq";
import { EndRollCallReq } from "../../protoOutput/ts/rollCallService/EndRollCallReq";
import { EndRollCallRes } from "../../protoOutput/ts/rollCallService/EndRollCallRes";
import { ValidateRes } from "../../protoOutput/ts/rollCallService/ValidateRes";
import { GetMyPresencesReq } from "../../protoOutput/ts/rollCallService/GetMyPresencesReq";
import { GetMyPresencesRes } from "../../protoOutput/ts/rollCallService/GetMyPresencesRes";
import { Code as RpcCode } from "../../protoOutput/ts/rollCallService/Code";

import { ensureUser } from "../utils"

import { getRepository } from "typeorm";
import { RollCall, Code, Course } from "../entity";

interface RollCallEntry {
    courseId: number,
    end: () => void
}

const rollCalls: { [id: number]: RollCallEntry } = {};

setInterval(() => console.log("Intervals:", Object.keys(rollCalls)), 5000);

// const rollCallRepo = getRepository(RollCall);
// const courseRepo = getRepository(Course);

export const rollCallHandlers: RollCallServiceHandlers = {
    async StartRollCall(
        call: grpc.ServerWritableStream<StartRollCallReq, RpcCode>
    ) {
        console.log(call.request);
        // const { courseId, periodStart, periodEnd } = call.request;
        // const periodStartDate = new Date(periodStart);
        // const periodEndDate = new Date(periodEnd);

        // const course = courseRepo.findOne({ where: { id: courseId }});
        
        let rollCallId = Math.floor(Math.random() * 10000);
        
        const interval = setInterval(() => {
            call.write({ code: String(Math.floor(Math.random() * 1000000000)), rollCallId });
        }, 2000);
        rollCalls[rollCallId] = {
            courseId: 13,
            end: () => {
                call.end();
                clearInterval(interval);
                delete rollCalls[rollCallId];
            }
        }

        // rollCallRepo.create({ })
    },

    EndRollCall(
        call: grpc.ServerUnaryCall<EndRollCallReq, EndRollCallRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        console.log(call.request);

        const { rollCallId } = call.request;
        if (!rollCallId || rollCalls[rollCallId] === undefined) {
            callback({ code: grpc.status.INVALID_ARGUMENT, message: 'Invalid rollCallId' });
            return;
        }

        rollCalls[rollCallId].end();
        callback(null);
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