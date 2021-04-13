// Original file: proto/grpcTest.proto

import type * as grpc from '@grpc/grpc-js'
import type { Reply as _grpcTest_Reply, Reply__Output as _grpcTest_Reply__Output } from '../grpcTest/Reply';
import type { Request as _grpcTest_Request, Request__Output as _grpcTest_Request__Output } from '../grpcTest/Request';

export interface GrpcTestClient extends grpc.Client {
  TestAuth(argument: _grpcTest_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  TestAuth(argument: _grpcTest_Request, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  TestAuth(argument: _grpcTest_Request, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  TestAuth(argument: _grpcTest_Request, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testAuth(argument: _grpcTest_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testAuth(argument: _grpcTest_Request, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testAuth(argument: _grpcTest_Request, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testAuth(argument: _grpcTest_Request, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  
  TestAuthAdmin(argument: _grpcTest_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  TestAuthAdmin(argument: _grpcTest_Request, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  TestAuthAdmin(argument: _grpcTest_Request, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  TestAuthAdmin(argument: _grpcTest_Request, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testAuthAdmin(argument: _grpcTest_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testAuthAdmin(argument: _grpcTest_Request, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testAuthAdmin(argument: _grpcTest_Request, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testAuthAdmin(argument: _grpcTest_Request, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  
  TestNoAuth(argument: _grpcTest_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  TestNoAuth(argument: _grpcTest_Request, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  TestNoAuth(argument: _grpcTest_Request, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  TestNoAuth(argument: _grpcTest_Request, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testNoAuth(argument: _grpcTest_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testNoAuth(argument: _grpcTest_Request, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testNoAuth(argument: _grpcTest_Request, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  testNoAuth(argument: _grpcTest_Request, callback: (error?: grpc.ServiceError, result?: _grpcTest_Reply__Output) => void): grpc.ClientUnaryCall;
  
}

export interface GrpcTestHandlers extends grpc.UntypedServiceImplementation {
  TestAuth: grpc.handleUnaryCall<_grpcTest_Request__Output, _grpcTest_Reply>;
  
  TestAuthAdmin: grpc.handleUnaryCall<_grpcTest_Request__Output, _grpcTest_Reply>;
  
  TestNoAuth: grpc.handleUnaryCall<_grpcTest_Request__Output, _grpcTest_Reply>;
  
}
