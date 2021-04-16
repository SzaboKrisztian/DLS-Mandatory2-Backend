/**
 * @fileoverview gRPC-Web generated client stub for accountService
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.accountService = require('./accountService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountService.AccountServiceClient =
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
proto.accountService.AccountServicePromiseClient =
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
 *   !proto.accountService.CreateData,
 *   !proto.accountService.Person>}
 */
const methodDescriptor_AccountService_CreateStudent = new grpc.web.MethodDescriptor(
  '/accountService.AccountService/CreateStudent',
  grpc.web.MethodType.UNARY,
  proto.accountService.CreateData,
  proto.accountService.Person,
  /**
   * @param {!proto.accountService.CreateData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.Person.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountService.CreateData,
 *   !proto.accountService.Person>}
 */
const methodInfo_AccountService_CreateStudent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountService.Person,
  /**
   * @param {!proto.accountService.CreateData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.Person.deserializeBinary
);


/**
 * @param {!proto.accountService.CreateData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountService.Person)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountService.Person>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountService.AccountServiceClient.prototype.createStudent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountService.AccountService/CreateStudent',
      request,
      metadata || {},
      methodDescriptor_AccountService_CreateStudent,
      callback);
};


/**
 * @param {!proto.accountService.CreateData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountService.Person>}
 *     Promise that resolves to the response
 */
proto.accountService.AccountServicePromiseClient.prototype.createStudent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountService.AccountService/CreateStudent',
      request,
      metadata || {},
      methodDescriptor_AccountService_CreateStudent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountService.UpdateData,
 *   !proto.accountService.Person>}
 */
const methodDescriptor_AccountService_UpdateStudent = new grpc.web.MethodDescriptor(
  '/accountService.AccountService/UpdateStudent',
  grpc.web.MethodType.UNARY,
  proto.accountService.UpdateData,
  proto.accountService.Person,
  /**
   * @param {!proto.accountService.UpdateData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.Person.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountService.UpdateData,
 *   !proto.accountService.Person>}
 */
const methodInfo_AccountService_UpdateStudent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountService.Person,
  /**
   * @param {!proto.accountService.UpdateData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.Person.deserializeBinary
);


/**
 * @param {!proto.accountService.UpdateData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountService.Person)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountService.Person>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountService.AccountServiceClient.prototype.updateStudent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountService.AccountService/UpdateStudent',
      request,
      metadata || {},
      methodDescriptor_AccountService_UpdateStudent,
      callback);
};


/**
 * @param {!proto.accountService.UpdateData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountService.Person>}
 *     Promise that resolves to the response
 */
proto.accountService.AccountServicePromiseClient.prototype.updateStudent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountService.AccountService/UpdateStudent',
      request,
      metadata || {},
      methodDescriptor_AccountService_UpdateStudent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountService.DeleteReq,
 *   !proto.accountService.DeleteRes>}
 */
const methodDescriptor_AccountService_DeleteStudent = new grpc.web.MethodDescriptor(
  '/accountService.AccountService/DeleteStudent',
  grpc.web.MethodType.UNARY,
  proto.accountService.DeleteReq,
  proto.accountService.DeleteRes,
  /**
   * @param {!proto.accountService.DeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.DeleteRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountService.DeleteReq,
 *   !proto.accountService.DeleteRes>}
 */
const methodInfo_AccountService_DeleteStudent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountService.DeleteRes,
  /**
   * @param {!proto.accountService.DeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.DeleteRes.deserializeBinary
);


/**
 * @param {!proto.accountService.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountService.DeleteRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountService.DeleteRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountService.AccountServiceClient.prototype.deleteStudent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountService.AccountService/DeleteStudent',
      request,
      metadata || {},
      methodDescriptor_AccountService_DeleteStudent,
      callback);
};


/**
 * @param {!proto.accountService.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountService.DeleteRes>}
 *     Promise that resolves to the response
 */
proto.accountService.AccountServicePromiseClient.prototype.deleteStudent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountService.AccountService/DeleteStudent',
      request,
      metadata || {},
      methodDescriptor_AccountService_DeleteStudent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountService.CreateData,
 *   !proto.accountService.Person>}
 */
const methodDescriptor_AccountService_CreateTeacher = new grpc.web.MethodDescriptor(
  '/accountService.AccountService/CreateTeacher',
  grpc.web.MethodType.UNARY,
  proto.accountService.CreateData,
  proto.accountService.Person,
  /**
   * @param {!proto.accountService.CreateData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.Person.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountService.CreateData,
 *   !proto.accountService.Person>}
 */
const methodInfo_AccountService_CreateTeacher = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountService.Person,
  /**
   * @param {!proto.accountService.CreateData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.Person.deserializeBinary
);


/**
 * @param {!proto.accountService.CreateData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountService.Person)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountService.Person>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountService.AccountServiceClient.prototype.createTeacher =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountService.AccountService/CreateTeacher',
      request,
      metadata || {},
      methodDescriptor_AccountService_CreateTeacher,
      callback);
};


/**
 * @param {!proto.accountService.CreateData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountService.Person>}
 *     Promise that resolves to the response
 */
proto.accountService.AccountServicePromiseClient.prototype.createTeacher =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountService.AccountService/CreateTeacher',
      request,
      metadata || {},
      methodDescriptor_AccountService_CreateTeacher);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountService.UpdateData,
 *   !proto.accountService.Person>}
 */
const methodDescriptor_AccountService_UpdateTeacher = new grpc.web.MethodDescriptor(
  '/accountService.AccountService/UpdateTeacher',
  grpc.web.MethodType.UNARY,
  proto.accountService.UpdateData,
  proto.accountService.Person,
  /**
   * @param {!proto.accountService.UpdateData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.Person.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountService.UpdateData,
 *   !proto.accountService.Person>}
 */
const methodInfo_AccountService_UpdateTeacher = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountService.Person,
  /**
   * @param {!proto.accountService.UpdateData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.Person.deserializeBinary
);


/**
 * @param {!proto.accountService.UpdateData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountService.Person)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountService.Person>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountService.AccountServiceClient.prototype.updateTeacher =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountService.AccountService/UpdateTeacher',
      request,
      metadata || {},
      methodDescriptor_AccountService_UpdateTeacher,
      callback);
};


/**
 * @param {!proto.accountService.UpdateData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountService.Person>}
 *     Promise that resolves to the response
 */
proto.accountService.AccountServicePromiseClient.prototype.updateTeacher =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountService.AccountService/UpdateTeacher',
      request,
      metadata || {},
      methodDescriptor_AccountService_UpdateTeacher);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountService.DeleteReq,
 *   !proto.accountService.DeleteRes>}
 */
const methodDescriptor_AccountService_DeleteTeacher = new grpc.web.MethodDescriptor(
  '/accountService.AccountService/DeleteTeacher',
  grpc.web.MethodType.UNARY,
  proto.accountService.DeleteReq,
  proto.accountService.DeleteRes,
  /**
   * @param {!proto.accountService.DeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.DeleteRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountService.DeleteReq,
 *   !proto.accountService.DeleteRes>}
 */
const methodInfo_AccountService_DeleteTeacher = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountService.DeleteRes,
  /**
   * @param {!proto.accountService.DeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.DeleteRes.deserializeBinary
);


/**
 * @param {!proto.accountService.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountService.DeleteRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountService.DeleteRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountService.AccountServiceClient.prototype.deleteTeacher =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountService.AccountService/DeleteTeacher',
      request,
      metadata || {},
      methodDescriptor_AccountService_DeleteTeacher,
      callback);
};


/**
 * @param {!proto.accountService.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountService.DeleteRes>}
 *     Promise that resolves to the response
 */
proto.accountService.AccountServicePromiseClient.prototype.deleteTeacher =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountService.AccountService/DeleteTeacher',
      request,
      metadata || {},
      methodDescriptor_AccountService_DeleteTeacher);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountService.ResetPassReq,
 *   !proto.accountService.ResetPassRes>}
 */
const methodDescriptor_AccountService_ResetPassword = new grpc.web.MethodDescriptor(
  '/accountService.AccountService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.accountService.ResetPassReq,
  proto.accountService.ResetPassRes,
  /**
   * @param {!proto.accountService.ResetPassReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.ResetPassRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountService.ResetPassReq,
 *   !proto.accountService.ResetPassRes>}
 */
const methodInfo_AccountService_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountService.ResetPassRes,
  /**
   * @param {!proto.accountService.ResetPassReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountService.ResetPassRes.deserializeBinary
);


/**
 * @param {!proto.accountService.ResetPassReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountService.ResetPassRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountService.ResetPassRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountService.AccountServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountService.AccountService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_AccountService_ResetPassword,
      callback);
};


/**
 * @param {!proto.accountService.ResetPassReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountService.ResetPassRes>}
 *     Promise that resolves to the response
 */
proto.accountService.AccountServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountService.AccountService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_AccountService_ResetPassword);
};


module.exports = proto.accountService;

