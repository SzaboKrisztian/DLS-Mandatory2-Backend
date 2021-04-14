import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { CourseServiceClient as _courseService_CourseServiceClient } from './courseService/CourseService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  courseService: {
    Course: MessageTypeDefinition
    CourseService: SubtypeConstructor<typeof grpc.Client, _courseService_CourseServiceClient> & { service: ServiceDefinition }
    MyCoursesReq: MessageTypeDefinition
    MyCoursesRes: MessageTypeDefinition
    MyPresencesReq: MessageTypeDefinition
    MyPresencesRes: MessageTypeDefinition
    Presence: MessageTypeDefinition
  }
}

