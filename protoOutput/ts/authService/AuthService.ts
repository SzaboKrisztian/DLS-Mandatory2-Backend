// Original file: proto/authService.proto

import type * as grpc from '@grpc/grpc-js'
import type { LoginRequest as _authService_LoginRequest, LoginRequest__Output as _authService_LoginRequest__Output } from '../authService/LoginRequest';
import type { LoginResponse as _authService_LoginResponse, LoginResponse__Output as _authService_LoginResponse__Output } from '../authService/LoginResponse';

export interface AuthServiceClient extends grpc.Client {
  Login(argument: _authService_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  Login(argument: _authService_LoginRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  Login(argument: _authService_LoginRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  Login(argument: _authService_LoginRequest, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _authService_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _authService_LoginRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _authService_LoginRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _authService_LoginRequest, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_authService_LoginRequest__Output, _authService_LoginResponse>;
  
}
