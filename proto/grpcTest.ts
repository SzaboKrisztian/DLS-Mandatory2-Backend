import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { GrpcTestClient as _grpcTest_GrpcTestClient } from './grpcTest/GrpcTest';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  grpcTest: {
    GrpcTest: SubtypeConstructor<typeof grpc.Client, _grpcTest_GrpcTestClient> & { service: ServiceDefinition }
    Reply: MessageTypeDefinition
    Request: MessageTypeDefinition
  }
}

