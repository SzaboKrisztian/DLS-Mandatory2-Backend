import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { CourseServiceClient as _courseService_CourseServiceClient } from './courseService/CourseService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  courseService: {
    AllCoursesReq: MessageTypeDefinition
    AllCoursesRes: MessageTypeDefinition
    AllStudentsReq: MessageTypeDefinition
    AllStudentsRes: MessageTypeDefinition
    AllTeachersReq: MessageTypeDefinition
    AllTeachersRes: MessageTypeDefinition
    Course: MessageTypeDefinition
    CourseService: SubtypeConstructor<typeof grpc.Client, _courseService_CourseServiceClient> & { service: ServiceDefinition }
    CreateCourseReq: MessageTypeDefinition
    DeleteCourseReq: MessageTypeDefinition
    DeleteCourseRes: MessageTypeDefinition
    GetTeachersForCourseReq: MessageTypeDefinition
    GetTeachersForCourseRes: MessageTypeDefinition
    MyCoursesReq: MessageTypeDefinition
    MyCoursesRes: MessageTypeDefinition
    MyPresence: MessageTypeDefinition
    MyPresencesReq: MessageTypeDefinition
    MyPresencesRes: MessageTypeDefinition
    Person: MessageTypeDefinition
    Presence: MessageTypeDefinition
    PresencesForCourseReq: MessageTypeDefinition
    PresencesForCourseRes: MessageTypeDefinition
    RenameCourseReq: MessageTypeDefinition
    StudentToCourseReq: MessageTypeDefinition
    StudentToCourseRes: MessageTypeDefinition
    StudentsForCourseReq: MessageTypeDefinition
    StudentsForCourseRes: MessageTypeDefinition
    TeacherForCourseReq: MessageTypeDefinition
    TeacherForCourseRes: MessageTypeDefinition
  }
}

