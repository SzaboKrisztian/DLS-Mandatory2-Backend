// Original file: proto/rollCallService.proto

import type * as grpc from '@grpc/grpc-js'
import type { Code as _rollCallService_Code, Code__Output as _rollCallService_Code__Output } from '../rollCallService/Code';
import type { EndRollCallReq as _rollCallService_EndRollCallReq, EndRollCallReq__Output as _rollCallService_EndRollCallReq__Output } from '../rollCallService/EndRollCallReq';
import type { EndRollCallRes as _rollCallService_EndRollCallRes, EndRollCallRes__Output as _rollCallService_EndRollCallRes__Output } from '../rollCallService/EndRollCallRes';
import type { GetMyPresencesReq as _rollCallService_GetMyPresencesReq, GetMyPresencesReq__Output as _rollCallService_GetMyPresencesReq__Output } from '../rollCallService/GetMyPresencesReq';
import type { GetMyPresencesRes as _rollCallService_GetMyPresencesRes, GetMyPresencesRes__Output as _rollCallService_GetMyPresencesRes__Output } from '../rollCallService/GetMyPresencesRes';
import type { ListRollCallsReq as _rollCallService_ListRollCallsReq, ListRollCallsReq__Output as _rollCallService_ListRollCallsReq__Output } from '../rollCallService/ListRollCallsReq';
import type { ListRollCallsRes as _rollCallService_ListRollCallsRes, ListRollCallsRes__Output as _rollCallService_ListRollCallsRes__Output } from '../rollCallService/ListRollCallsRes';
import type { ReattachReq as _rollCallService_ReattachReq, ReattachReq__Output as _rollCallService_ReattachReq__Output } from '../rollCallService/ReattachReq';
import type { StartRollCallReq as _rollCallService_StartRollCallReq, StartRollCallReq__Output as _rollCallService_StartRollCallReq__Output } from '../rollCallService/StartRollCallReq';
import type { ValidateRes as _rollCallService_ValidateRes, ValidateRes__Output as _rollCallService_ValidateRes__Output } from '../rollCallService/ValidateRes';

export interface RollCallServiceClient extends grpc.Client {
  EndRollCall(argument: _rollCallService_EndRollCallReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_EndRollCallRes__Output) => void): grpc.ClientUnaryCall;
  EndRollCall(argument: _rollCallService_EndRollCallReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _rollCallService_EndRollCallRes__Output) => void): grpc.ClientUnaryCall;
  EndRollCall(argument: _rollCallService_EndRollCallReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_EndRollCallRes__Output) => void): grpc.ClientUnaryCall;
  EndRollCall(argument: _rollCallService_EndRollCallReq, callback: (error?: grpc.ServiceError, result?: _rollCallService_EndRollCallRes__Output) => void): grpc.ClientUnaryCall;
  endRollCall(argument: _rollCallService_EndRollCallReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_EndRollCallRes__Output) => void): grpc.ClientUnaryCall;
  endRollCall(argument: _rollCallService_EndRollCallReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _rollCallService_EndRollCallRes__Output) => void): grpc.ClientUnaryCall;
  endRollCall(argument: _rollCallService_EndRollCallReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_EndRollCallRes__Output) => void): grpc.ClientUnaryCall;
  endRollCall(argument: _rollCallService_EndRollCallReq, callback: (error?: grpc.ServiceError, result?: _rollCallService_EndRollCallRes__Output) => void): grpc.ClientUnaryCall;
  
  GetMyPresences(argument: _rollCallService_GetMyPresencesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_GetMyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  GetMyPresences(argument: _rollCallService_GetMyPresencesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _rollCallService_GetMyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  GetMyPresences(argument: _rollCallService_GetMyPresencesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_GetMyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  GetMyPresences(argument: _rollCallService_GetMyPresencesReq, callback: (error?: grpc.ServiceError, result?: _rollCallService_GetMyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  getMyPresences(argument: _rollCallService_GetMyPresencesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_GetMyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  getMyPresences(argument: _rollCallService_GetMyPresencesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _rollCallService_GetMyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  getMyPresences(argument: _rollCallService_GetMyPresencesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_GetMyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  getMyPresences(argument: _rollCallService_GetMyPresencesReq, callback: (error?: grpc.ServiceError, result?: _rollCallService_GetMyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  
  ListRollCalls(argument: _rollCallService_ListRollCallsReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_ListRollCallsRes__Output) => void): grpc.ClientUnaryCall;
  ListRollCalls(argument: _rollCallService_ListRollCallsReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _rollCallService_ListRollCallsRes__Output) => void): grpc.ClientUnaryCall;
  ListRollCalls(argument: _rollCallService_ListRollCallsReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_ListRollCallsRes__Output) => void): grpc.ClientUnaryCall;
  ListRollCalls(argument: _rollCallService_ListRollCallsReq, callback: (error?: grpc.ServiceError, result?: _rollCallService_ListRollCallsRes__Output) => void): grpc.ClientUnaryCall;
  listRollCalls(argument: _rollCallService_ListRollCallsReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_ListRollCallsRes__Output) => void): grpc.ClientUnaryCall;
  listRollCalls(argument: _rollCallService_ListRollCallsReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _rollCallService_ListRollCallsRes__Output) => void): grpc.ClientUnaryCall;
  listRollCalls(argument: _rollCallService_ListRollCallsReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_ListRollCallsRes__Output) => void): grpc.ClientUnaryCall;
  listRollCalls(argument: _rollCallService_ListRollCallsReq, callback: (error?: grpc.ServiceError, result?: _rollCallService_ListRollCallsRes__Output) => void): grpc.ClientUnaryCall;
  
  ReattachToRollCall(argument: _rollCallService_ReattachReq, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_rollCallService_Code__Output>;
  ReattachToRollCall(argument: _rollCallService_ReattachReq, options?: grpc.CallOptions): grpc.ClientReadableStream<_rollCallService_Code__Output>;
  reattachToRollCall(argument: _rollCallService_ReattachReq, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_rollCallService_Code__Output>;
  reattachToRollCall(argument: _rollCallService_ReattachReq, options?: grpc.CallOptions): grpc.ClientReadableStream<_rollCallService_Code__Output>;
  
  StartRollCall(argument: _rollCallService_StartRollCallReq, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_rollCallService_Code__Output>;
  StartRollCall(argument: _rollCallService_StartRollCallReq, options?: grpc.CallOptions): grpc.ClientReadableStream<_rollCallService_Code__Output>;
  startRollCall(argument: _rollCallService_StartRollCallReq, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_rollCallService_Code__Output>;
  startRollCall(argument: _rollCallService_StartRollCallReq, options?: grpc.CallOptions): grpc.ClientReadableStream<_rollCallService_Code__Output>;
  
  ValidateCode(argument: _rollCallService_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_ValidateRes__Output) => void): grpc.ClientUnaryCall;
  ValidateCode(argument: _rollCallService_Code, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _rollCallService_ValidateRes__Output) => void): grpc.ClientUnaryCall;
  ValidateCode(argument: _rollCallService_Code, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_ValidateRes__Output) => void): grpc.ClientUnaryCall;
  ValidateCode(argument: _rollCallService_Code, callback: (error?: grpc.ServiceError, result?: _rollCallService_ValidateRes__Output) => void): grpc.ClientUnaryCall;
  validateCode(argument: _rollCallService_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_ValidateRes__Output) => void): grpc.ClientUnaryCall;
  validateCode(argument: _rollCallService_Code, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _rollCallService_ValidateRes__Output) => void): grpc.ClientUnaryCall;
  validateCode(argument: _rollCallService_Code, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _rollCallService_ValidateRes__Output) => void): grpc.ClientUnaryCall;
  validateCode(argument: _rollCallService_Code, callback: (error?: grpc.ServiceError, result?: _rollCallService_ValidateRes__Output) => void): grpc.ClientUnaryCall;
  
}

export interface RollCallServiceHandlers extends grpc.UntypedServiceImplementation {
  EndRollCall: grpc.handleUnaryCall<_rollCallService_EndRollCallReq__Output, _rollCallService_EndRollCallRes>;
  
  GetMyPresences: grpc.handleUnaryCall<_rollCallService_GetMyPresencesReq__Output, _rollCallService_GetMyPresencesRes>;
  
  ListRollCalls: grpc.handleUnaryCall<_rollCallService_ListRollCallsReq__Output, _rollCallService_ListRollCallsRes>;
  
  ReattachToRollCall: grpc.handleServerStreamingCall<_rollCallService_ReattachReq__Output, _rollCallService_Code>;
  
  StartRollCall: grpc.handleServerStreamingCall<_rollCallService_StartRollCallReq__Output, _rollCallService_Code>;
  
  ValidateCode: grpc.handleUnaryCall<_rollCallService_Code__Output, _rollCallService_ValidateRes>;
  
}
