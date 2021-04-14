// Original file: proto/courseService.proto

import type * as grpc from '@grpc/grpc-js'
import type { MyCoursesReq as _courseService_MyCoursesReq, MyCoursesReq__Output as _courseService_MyCoursesReq__Output } from '../courseService/MyCoursesReq';
import type { MyCoursesRes as _courseService_MyCoursesRes, MyCoursesRes__Output as _courseService_MyCoursesRes__Output } from '../courseService/MyCoursesRes';
import type { MyPresencesReq as _courseService_MyPresencesReq, MyPresencesReq__Output as _courseService_MyPresencesReq__Output } from '../courseService/MyPresencesReq';
import type { MyPresencesRes as _courseService_MyPresencesRes, MyPresencesRes__Output as _courseService_MyPresencesRes__Output } from '../courseService/MyPresencesRes';

export interface CourseServiceClient extends grpc.Client {
  GetMyCourses(argument: _courseService_MyCoursesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  GetMyCourses(argument: _courseService_MyCoursesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  GetMyCourses(argument: _courseService_MyCoursesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  GetMyCourses(argument: _courseService_MyCoursesReq, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getMyCourses(argument: _courseService_MyCoursesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getMyCourses(argument: _courseService_MyCoursesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getMyCourses(argument: _courseService_MyCoursesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getMyCourses(argument: _courseService_MyCoursesReq, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  
  GeyMyPresences(argument: _courseService_MyPresencesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  GeyMyPresences(argument: _courseService_MyPresencesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  GeyMyPresences(argument: _courseService_MyPresencesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  GeyMyPresences(argument: _courseService_MyPresencesReq, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  geyMyPresences(argument: _courseService_MyPresencesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  geyMyPresences(argument: _courseService_MyPresencesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  geyMyPresences(argument: _courseService_MyPresencesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  geyMyPresences(argument: _courseService_MyPresencesReq, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  
}

export interface CourseServiceHandlers extends grpc.UntypedServiceImplementation {
  GetMyCourses: grpc.handleUnaryCall<_courseService_MyCoursesReq__Output, _courseService_MyCoursesRes>;
  
  GeyMyPresences: grpc.handleUnaryCall<_courseService_MyPresencesReq__Output, _courseService_MyPresencesRes>;
  
}
