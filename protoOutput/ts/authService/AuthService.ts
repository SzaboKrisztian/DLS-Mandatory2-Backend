// Original file: proto/authService.proto

import type * as grpc from '@grpc/grpc-js'
import type { GetUserRequest as _authService_GetUserRequest, GetUserRequest__Output as _authService_GetUserRequest__Output } from '../authService/GetUserRequest';
import type { GetUserResponse as _authService_GetUserResponse, GetUserResponse__Output as _authService_GetUserResponse__Output } from '../authService/GetUserResponse';
import type { LoginRequest as _authService_LoginRequest, LoginRequest__Output as _authService_LoginRequest__Output } from '../authService/LoginRequest';
import type { LoginResponse as _authService_LoginResponse, LoginResponse__Output as _authService_LoginResponse__Output } from '../authService/LoginResponse';
import type { LogoutRequest as _authService_LogoutRequest, LogoutRequest__Output as _authService_LogoutRequest__Output } from '../authService/LogoutRequest';
import type { LogoutResponse as _authService_LogoutResponse, LogoutResponse__Output as _authService_LogoutResponse__Output } from '../authService/LogoutResponse';

export interface AuthServiceClient extends grpc.Client {
  GetUser(argument: _authService_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_GetUserResponse__Output) => void): grpc.ClientUnaryCall;
  GetUser(argument: _authService_GetUserRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _authService_GetUserResponse__Output) => void): grpc.ClientUnaryCall;
  GetUser(argument: _authService_GetUserRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_GetUserResponse__Output) => void): grpc.ClientUnaryCall;
  GetUser(argument: _authService_GetUserRequest, callback: (error?: grpc.ServiceError, result?: _authService_GetUserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _authService_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_GetUserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _authService_GetUserRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _authService_GetUserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _authService_GetUserRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_GetUserResponse__Output) => void): grpc.ClientUnaryCall;
  getUser(argument: _authService_GetUserRequest, callback: (error?: grpc.ServiceError, result?: _authService_GetUserResponse__Output) => void): grpc.ClientUnaryCall;
  
  Login(argument: _authService_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  Login(argument: _authService_LoginRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  Login(argument: _authService_LoginRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  Login(argument: _authService_LoginRequest, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _authService_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _authService_LoginRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _authService_LoginRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _authService_LoginRequest, callback: (error?: grpc.ServiceError, result?: _authService_LoginResponse__Output) => void): grpc.ClientUnaryCall;
  
  Logout(argument: _authService_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LogoutResponse__Output) => void): grpc.ClientUnaryCall;
  Logout(argument: _authService_LogoutRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _authService_LogoutResponse__Output) => void): grpc.ClientUnaryCall;
  Logout(argument: _authService_LogoutRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LogoutResponse__Output) => void): grpc.ClientUnaryCall;
  Logout(argument: _authService_LogoutRequest, callback: (error?: grpc.ServiceError, result?: _authService_LogoutResponse__Output) => void): grpc.ClientUnaryCall;
  logout(argument: _authService_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LogoutResponse__Output) => void): grpc.ClientUnaryCall;
  logout(argument: _authService_LogoutRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _authService_LogoutResponse__Output) => void): grpc.ClientUnaryCall;
  logout(argument: _authService_LogoutRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _authService_LogoutResponse__Output) => void): grpc.ClientUnaryCall;
  logout(argument: _authService_LogoutRequest, callback: (error?: grpc.ServiceError, result?: _authService_LogoutResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUser: grpc.handleUnaryCall<_authService_GetUserRequest__Output, _authService_GetUserResponse>;
  
  Login: grpc.handleUnaryCall<_authService_LoginRequest__Output, _authService_LoginResponse>;
  
  Logout: grpc.handleUnaryCall<_authService_LogoutRequest__Output, _authService_LogoutResponse>;
  
}
