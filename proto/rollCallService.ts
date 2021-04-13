import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { RollCallClient as _rollCallService_RollCallClient } from './rollCallService/RollCall';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  rollCallService: {
    Code: MessageTypeDefinition
    EndRollCallReq: MessageTypeDefinition
    EndRollCallRes: MessageTypeDefinition
    GetMyPresencesReq: MessageTypeDefinition
    GetMyPresencesRes: MessageTypeDefinition
    Presence: MessageTypeDefinition
    RollCall: SubtypeConstructor<typeof grpc.Client, _rollCallService_RollCallClient> & { service: ServiceDefinition }
    StartRollCallReq: MessageTypeDefinition
    ValidateRes: MessageTypeDefinition
  }
}

