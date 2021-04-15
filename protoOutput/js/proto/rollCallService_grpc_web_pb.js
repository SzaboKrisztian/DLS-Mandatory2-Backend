/**
 * @fileoverview gRPC-Web generated client stub for rollCallService
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.rollCallService = require('./rollCallService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rollCallService.RollCallServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rollCallService.RollCallServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rollCallService.StartRollCallReq,
 *   !proto.rollCallService.Code>}
 */
const methodDescriptor_RollCallService_StartRollCall = new grpc.web.MethodDescriptor(
  '/rollCallService.RollCallService/StartRollCall',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.rollCallService.StartRollCallReq,
  proto.rollCallService.Code,
  /**
   * @param {!proto.rollCallService.StartRollCallReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.Code.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rollCallService.StartRollCallReq,
 *   !proto.rollCallService.Code>}
 */
const methodInfo_RollCallService_StartRollCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rollCallService.Code,
  /**
   * @param {!proto.rollCallService.StartRollCallReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.Code.deserializeBinary
);


/**
 * @param {!proto.rollCallService.StartRollCallReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rollCallService.Code>}
 *     The XHR Node Readable Stream
 */
proto.rollCallService.RollCallServiceClient.prototype.startRollCall =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rollCallService.RollCallService/StartRollCall',
      request,
      metadata || {},
      methodDescriptor_RollCallService_StartRollCall);
};


/**
 * @param {!proto.rollCallService.StartRollCallReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rollCallService.Code>}
 *     The XHR Node Readable Stream
 */
proto.rollCallService.RollCallServicePromiseClient.prototype.startRollCall =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rollCallService.RollCallService/StartRollCall',
      request,
      metadata || {},
      methodDescriptor_RollCallService_StartRollCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rollCallService.EndRollCallReq,
 *   !proto.rollCallService.EndRollCallRes>}
 */
const methodDescriptor_RollCallService_EndRollCall = new grpc.web.MethodDescriptor(
  '/rollCallService.RollCallService/EndRollCall',
  grpc.web.MethodType.UNARY,
  proto.rollCallService.EndRollCallReq,
  proto.rollCallService.EndRollCallRes,
  /**
   * @param {!proto.rollCallService.EndRollCallReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.EndRollCallRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rollCallService.EndRollCallReq,
 *   !proto.rollCallService.EndRollCallRes>}
 */
const methodInfo_RollCallService_EndRollCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rollCallService.EndRollCallRes,
  /**
   * @param {!proto.rollCallService.EndRollCallReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.EndRollCallRes.deserializeBinary
);


/**
 * @param {!proto.rollCallService.EndRollCallReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rollCallService.EndRollCallRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rollCallService.EndRollCallRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rollCallService.RollCallServiceClient.prototype.endRollCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rollCallService.RollCallService/EndRollCall',
      request,
      metadata || {},
      methodDescriptor_RollCallService_EndRollCall,
      callback);
};


/**
 * @param {!proto.rollCallService.EndRollCallReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rollCallService.EndRollCallRes>}
 *     Promise that resolves to the response
 */
proto.rollCallService.RollCallServicePromiseClient.prototype.endRollCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rollCallService.RollCallService/EndRollCall',
      request,
      metadata || {},
      methodDescriptor_RollCallService_EndRollCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rollCallService.ListRollCallsReq,
 *   !proto.rollCallService.ListRollCallsRes>}
 */
const methodDescriptor_RollCallService_ListRollCalls = new grpc.web.MethodDescriptor(
  '/rollCallService.RollCallService/ListRollCalls',
  grpc.web.MethodType.UNARY,
  proto.rollCallService.ListRollCallsReq,
  proto.rollCallService.ListRollCallsRes,
  /**
   * @param {!proto.rollCallService.ListRollCallsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.ListRollCallsRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rollCallService.ListRollCallsReq,
 *   !proto.rollCallService.ListRollCallsRes>}
 */
const methodInfo_RollCallService_ListRollCalls = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rollCallService.ListRollCallsRes,
  /**
   * @param {!proto.rollCallService.ListRollCallsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.ListRollCallsRes.deserializeBinary
);


/**
 * @param {!proto.rollCallService.ListRollCallsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rollCallService.ListRollCallsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rollCallService.ListRollCallsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rollCallService.RollCallServiceClient.prototype.listRollCalls =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rollCallService.RollCallService/ListRollCalls',
      request,
      metadata || {},
      methodDescriptor_RollCallService_ListRollCalls,
      callback);
};


/**
 * @param {!proto.rollCallService.ListRollCallsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rollCallService.ListRollCallsRes>}
 *     Promise that resolves to the response
 */
proto.rollCallService.RollCallServicePromiseClient.prototype.listRollCalls =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rollCallService.RollCallService/ListRollCalls',
      request,
      metadata || {},
      methodDescriptor_RollCallService_ListRollCalls);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rollCallService.ReattachReq,
 *   !proto.rollCallService.Code>}
 */
const methodDescriptor_RollCallService_ReattachToRollCall = new grpc.web.MethodDescriptor(
  '/rollCallService.RollCallService/ReattachToRollCall',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.rollCallService.ReattachReq,
  proto.rollCallService.Code,
  /**
   * @param {!proto.rollCallService.ReattachReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.Code.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rollCallService.ReattachReq,
 *   !proto.rollCallService.Code>}
 */
const methodInfo_RollCallService_ReattachToRollCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rollCallService.Code,
  /**
   * @param {!proto.rollCallService.ReattachReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.Code.deserializeBinary
);


/**
 * @param {!proto.rollCallService.ReattachReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rollCallService.Code>}
 *     The XHR Node Readable Stream
 */
proto.rollCallService.RollCallServiceClient.prototype.reattachToRollCall =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rollCallService.RollCallService/ReattachToRollCall',
      request,
      metadata || {},
      methodDescriptor_RollCallService_ReattachToRollCall);
};


/**
 * @param {!proto.rollCallService.ReattachReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rollCallService.Code>}
 *     The XHR Node Readable Stream
 */
proto.rollCallService.RollCallServicePromiseClient.prototype.reattachToRollCall =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rollCallService.RollCallService/ReattachToRollCall',
      request,
      metadata || {},
      methodDescriptor_RollCallService_ReattachToRollCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rollCallService.Code,
 *   !proto.rollCallService.ValidateRes>}
 */
const methodDescriptor_RollCallService_ValidateCode = new grpc.web.MethodDescriptor(
  '/rollCallService.RollCallService/ValidateCode',
  grpc.web.MethodType.UNARY,
  proto.rollCallService.Code,
  proto.rollCallService.ValidateRes,
  /**
   * @param {!proto.rollCallService.Code} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.ValidateRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rollCallService.Code,
 *   !proto.rollCallService.ValidateRes>}
 */
const methodInfo_RollCallService_ValidateCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rollCallService.ValidateRes,
  /**
   * @param {!proto.rollCallService.Code} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rollCallService.ValidateRes.deserializeBinary
);


/**
 * @param {!proto.rollCallService.Code} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rollCallService.ValidateRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rollCallService.ValidateRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rollCallService.RollCallServiceClient.prototype.validateCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rollCallService.RollCallService/ValidateCode',
      request,
      metadata || {},
      methodDescriptor_RollCallService_ValidateCode,
      callback);
};


/**
 * @param {!proto.rollCallService.Code} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rollCallService.ValidateRes>}
 *     Promise that resolves to the response
 */
proto.rollCallService.RollCallServicePromiseClient.prototype.validateCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rollCallService.RollCallService/ValidateCode',
      request,
      metadata || {},
      methodDescriptor_RollCallService_ValidateCode);
};


module.exports = proto.rollCallService;

