import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _authService_AuthServiceClient } from './authService/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  authService: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _authService_AuthServiceClient> & { service: ServiceDefinition }
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
  }
}

