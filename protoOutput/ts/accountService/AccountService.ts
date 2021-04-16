// Original file: proto/accountService.proto

import type * as grpc from '@grpc/grpc-js'
import type { CreateData as _accountService_CreateData, CreateData__Output as _accountService_CreateData__Output } from '../accountService/CreateData';
import type { DeleteReq as _accountService_DeleteReq, DeleteReq__Output as _accountService_DeleteReq__Output } from '../accountService/DeleteReq';
import type { DeleteRes as _accountService_DeleteRes, DeleteRes__Output as _accountService_DeleteRes__Output } from '../accountService/DeleteRes';
import type { Person as _accountService_Person, Person__Output as _accountService_Person__Output } from '../accountService/Person';
import type { ResetPassReq as _accountService_ResetPassReq, ResetPassReq__Output as _accountService_ResetPassReq__Output } from '../accountService/ResetPassReq';
import type { ResetPassRes as _accountService_ResetPassRes, ResetPassRes__Output as _accountService_ResetPassRes__Output } from '../accountService/ResetPassRes';
import type { UpdateData as _accountService_UpdateData, UpdateData__Output as _accountService_UpdateData__Output } from '../accountService/UpdateData';

export interface AccountServiceClient extends grpc.Client {
  CreateStudent(argument: _accountService_CreateData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  CreateStudent(argument: _accountService_CreateData, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  CreateStudent(argument: _accountService_CreateData, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  CreateStudent(argument: _accountService_CreateData, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  createStudent(argument: _accountService_CreateData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  createStudent(argument: _accountService_CreateData, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  createStudent(argument: _accountService_CreateData, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  createStudent(argument: _accountService_CreateData, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  
  CreateTeacher(argument: _accountService_CreateData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  CreateTeacher(argument: _accountService_CreateData, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  CreateTeacher(argument: _accountService_CreateData, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  CreateTeacher(argument: _accountService_CreateData, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  createTeacher(argument: _accountService_CreateData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  createTeacher(argument: _accountService_CreateData, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  createTeacher(argument: _accountService_CreateData, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  createTeacher(argument: _accountService_CreateData, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  
  DeleteStudent(argument: _accountService_DeleteReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  DeleteStudent(argument: _accountService_DeleteReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  DeleteStudent(argument: _accountService_DeleteReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  DeleteStudent(argument: _accountService_DeleteReq, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  deleteStudent(argument: _accountService_DeleteReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  deleteStudent(argument: _accountService_DeleteReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  deleteStudent(argument: _accountService_DeleteReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  deleteStudent(argument: _accountService_DeleteReq, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  
  DeleteTeacher(argument: _accountService_DeleteReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  DeleteTeacher(argument: _accountService_DeleteReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  DeleteTeacher(argument: _accountService_DeleteReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  DeleteTeacher(argument: _accountService_DeleteReq, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  deleteTeacher(argument: _accountService_DeleteReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  deleteTeacher(argument: _accountService_DeleteReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  deleteTeacher(argument: _accountService_DeleteReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  deleteTeacher(argument: _accountService_DeleteReq, callback: (error?: grpc.ServiceError, result?: _accountService_DeleteRes__Output) => void): grpc.ClientUnaryCall;
  
  ResetPassword(argument: _accountService_ResetPassReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_ResetPassRes__Output) => void): grpc.ClientUnaryCall;
  ResetPassword(argument: _accountService_ResetPassReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_ResetPassRes__Output) => void): grpc.ClientUnaryCall;
  ResetPassword(argument: _accountService_ResetPassReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_ResetPassRes__Output) => void): grpc.ClientUnaryCall;
  ResetPassword(argument: _accountService_ResetPassReq, callback: (error?: grpc.ServiceError, result?: _accountService_ResetPassRes__Output) => void): grpc.ClientUnaryCall;
  resetPassword(argument: _accountService_ResetPassReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_ResetPassRes__Output) => void): grpc.ClientUnaryCall;
  resetPassword(argument: _accountService_ResetPassReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_ResetPassRes__Output) => void): grpc.ClientUnaryCall;
  resetPassword(argument: _accountService_ResetPassReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_ResetPassRes__Output) => void): grpc.ClientUnaryCall;
  resetPassword(argument: _accountService_ResetPassReq, callback: (error?: grpc.ServiceError, result?: _accountService_ResetPassRes__Output) => void): grpc.ClientUnaryCall;
  
  UpdateStudent(argument: _accountService_UpdateData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  UpdateStudent(argument: _accountService_UpdateData, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  UpdateStudent(argument: _accountService_UpdateData, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  UpdateStudent(argument: _accountService_UpdateData, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  updateStudent(argument: _accountService_UpdateData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  updateStudent(argument: _accountService_UpdateData, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  updateStudent(argument: _accountService_UpdateData, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  updateStudent(argument: _accountService_UpdateData, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  
  UpdateTeacher(argument: _accountService_UpdateData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  UpdateTeacher(argument: _accountService_UpdateData, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  UpdateTeacher(argument: _accountService_UpdateData, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  UpdateTeacher(argument: _accountService_UpdateData, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  updateTeacher(argument: _accountService_UpdateData, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  updateTeacher(argument: _accountService_UpdateData, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  updateTeacher(argument: _accountService_UpdateData, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  updateTeacher(argument: _accountService_UpdateData, callback: (error?: grpc.ServiceError, result?: _accountService_Person__Output) => void): grpc.ClientUnaryCall;
  
}

export interface AccountServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateStudent: grpc.handleUnaryCall<_accountService_CreateData__Output, _accountService_Person>;
  
  CreateTeacher: grpc.handleUnaryCall<_accountService_CreateData__Output, _accountService_Person>;
  
  DeleteStudent: grpc.handleUnaryCall<_accountService_DeleteReq__Output, _accountService_DeleteRes>;
  
  DeleteTeacher: grpc.handleUnaryCall<_accountService_DeleteReq__Output, _accountService_DeleteRes>;
  
  ResetPassword: grpc.handleUnaryCall<_accountService_ResetPassReq__Output, _accountService_ResetPassRes>;
  
  UpdateStudent: grpc.handleUnaryCall<_accountService_UpdateData__Output, _accountService_Person>;
  
  UpdateTeacher: grpc.handleUnaryCall<_accountService_UpdateData__Output, _accountService_Person>;
  
}
