/**
 * @fileoverview gRPC-Web generated client stub for grpcTest
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.grpcTest = require('./grpcTest_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpcTest.GrpcTestClient =
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
proto.grpcTest.GrpcTestPromiseClient =
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
 *   !proto.grpcTest.Request,
 *   !proto.grpcTest.Reply>}
 */
const methodDescriptor_GrpcTest_TestNoAuth = new grpc.web.MethodDescriptor(
  '/grpcTest.GrpcTest/TestNoAuth',
  grpc.web.MethodType.UNARY,
  proto.grpcTest.Request,
  proto.grpcTest.Reply,
  /**
   * @param {!proto.grpcTest.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcTest.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpcTest.Request,
 *   !proto.grpcTest.Reply>}
 */
const methodInfo_GrpcTest_TestNoAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpcTest.Reply,
  /**
   * @param {!proto.grpcTest.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcTest.Reply.deserializeBinary
);


/**
 * @param {!proto.grpcTest.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpcTest.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpcTest.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpcTest.GrpcTestClient.prototype.testNoAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpcTest.GrpcTest/TestNoAuth',
      request,
      metadata || {},
      methodDescriptor_GrpcTest_TestNoAuth,
      callback);
};


/**
 * @param {!proto.grpcTest.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpcTest.Reply>}
 *     Promise that resolves to the response
 */
proto.grpcTest.GrpcTestPromiseClient.prototype.testNoAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpcTest.GrpcTest/TestNoAuth',
      request,
      metadata || {},
      methodDescriptor_GrpcTest_TestNoAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpcTest.Request,
 *   !proto.grpcTest.Reply>}
 */
const methodDescriptor_GrpcTest_TestAuth = new grpc.web.MethodDescriptor(
  '/grpcTest.GrpcTest/TestAuth',
  grpc.web.MethodType.UNARY,
  proto.grpcTest.Request,
  proto.grpcTest.Reply,
  /**
   * @param {!proto.grpcTest.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcTest.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpcTest.Request,
 *   !proto.grpcTest.Reply>}
 */
const methodInfo_GrpcTest_TestAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpcTest.Reply,
  /**
   * @param {!proto.grpcTest.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcTest.Reply.deserializeBinary
);


/**
 * @param {!proto.grpcTest.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpcTest.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpcTest.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpcTest.GrpcTestClient.prototype.testAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpcTest.GrpcTest/TestAuth',
      request,
      metadata || {},
      methodDescriptor_GrpcTest_TestAuth,
      callback);
};


/**
 * @param {!proto.grpcTest.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpcTest.Reply>}
 *     Promise that resolves to the response
 */
proto.grpcTest.GrpcTestPromiseClient.prototype.testAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpcTest.GrpcTest/TestAuth',
      request,
      metadata || {},
      methodDescriptor_GrpcTest_TestAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpcTest.Request,
 *   !proto.grpcTest.Reply>}
 */
const methodDescriptor_GrpcTest_TestAuthAdmin = new grpc.web.MethodDescriptor(
  '/grpcTest.GrpcTest/TestAuthAdmin',
  grpc.web.MethodType.UNARY,
  proto.grpcTest.Request,
  proto.grpcTest.Reply,
  /**
   * @param {!proto.grpcTest.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcTest.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpcTest.Request,
 *   !proto.grpcTest.Reply>}
 */
const methodInfo_GrpcTest_TestAuthAdmin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpcTest.Reply,
  /**
   * @param {!proto.grpcTest.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpcTest.Reply.deserializeBinary
);


/**
 * @param {!proto.grpcTest.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpcTest.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpcTest.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpcTest.GrpcTestClient.prototype.testAuthAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpcTest.GrpcTest/TestAuthAdmin',
      request,
      metadata || {},
      methodDescriptor_GrpcTest_TestAuthAdmin,
      callback);
};


/**
 * @param {!proto.grpcTest.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpcTest.Reply>}
 *     Promise that resolves to the response
 */
proto.grpcTest.GrpcTestPromiseClient.prototype.testAuthAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpcTest.GrpcTest/TestAuthAdmin',
      request,
      metadata || {},
      methodDescriptor_GrpcTest_TestAuthAdmin);
};


module.exports = proto.grpcTest;

