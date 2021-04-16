import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AccountServiceClient as _accountService_AccountServiceClient } from './accountService/AccountService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  accountService: {
    AccountService: SubtypeConstructor<typeof grpc.Client, _accountService_AccountServiceClient> & { service: ServiceDefinition }
    Course: MessageTypeDefinition
    CreateData: MessageTypeDefinition
    DeleteReq: MessageTypeDefinition
    DeleteRes: MessageTypeDefinition
    Person: MessageTypeDefinition
    ResetPassReq: MessageTypeDefinition
    ResetPassRes: MessageTypeDefinition
    UpdateData: MessageTypeDefinition
  }
}

