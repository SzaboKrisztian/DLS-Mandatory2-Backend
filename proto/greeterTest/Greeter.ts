// Original file: proto/greeter.proto

import type * as grpc from '@grpc/grpc-js'
import type { HelloReply as _greeterTest_HelloReply, HelloReply__Output as _greeterTest_HelloReply__Output } from '../greeterTest/HelloReply';
import type { HelloRequest as _greeterTest_HelloRequest, HelloRequest__Output as _greeterTest_HelloRequest__Output } from '../greeterTest/HelloRequest';

export interface GreeterClient extends grpc.Client {
  SayHello(argument: _greeterTest_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _greeterTest_HelloReply__Output) => void): grpc.ClientUnaryCall;
  SayHello(argument: _greeterTest_HelloRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _greeterTest_HelloReply__Output) => void): grpc.ClientUnaryCall;
  SayHello(argument: _greeterTest_HelloRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _greeterTest_HelloReply__Output) => void): grpc.ClientUnaryCall;
  SayHello(argument: _greeterTest_HelloRequest, callback: (error?: grpc.ServiceError, result?: _greeterTest_HelloReply__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _greeterTest_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _greeterTest_HelloReply__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _greeterTest_HelloRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _greeterTest_HelloReply__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _greeterTest_HelloRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _greeterTest_HelloReply__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _greeterTest_HelloRequest, callback: (error?: grpc.ServiceError, result?: _greeterTest_HelloReply__Output) => void): grpc.ClientUnaryCall;
  
}

export interface GreeterHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_greeterTest_HelloRequest__Output, _greeterTest_HelloReply>;
  
}
