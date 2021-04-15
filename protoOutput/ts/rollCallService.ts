import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { RollCallServiceClient as _rollCallService_RollCallServiceClient } from './rollCallService/RollCallService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  rollCallService: {
    Code: MessageTypeDefinition
    EndRollCallReq: MessageTypeDefinition
    EndRollCallRes: MessageTypeDefinition
    ListRollCallsReq: MessageTypeDefinition
    ListRollCallsRes: MessageTypeDefinition
    MarkAsPresentReq: MessageTypeDefinition
    MarkAsPresentRes: MessageTypeDefinition
    ReattachReq: MessageTypeDefinition
    RollCallService: SubtypeConstructor<typeof grpc.Client, _rollCallService_RollCallServiceClient> & { service: ServiceDefinition }
    StartRollCallReq: MessageTypeDefinition
    ValidateRes: MessageTypeDefinition
  }
}

