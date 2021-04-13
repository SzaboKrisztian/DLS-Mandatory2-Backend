/**
 * @fileoverview gRPC-Web generated client stub for authService
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.authService = require('./authService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.authService.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

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
proto.authService.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

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
 *   !proto.authService.LoginRequest,
 *   !proto.authService.LoginResponse>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/authService.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.authService.LoginRequest,
  proto.authService.LoginResponse,
  /**
   * @param {!proto.authService.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authService.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.authService.LoginRequest,
 *   !proto.authService.LoginResponse>}
 */
const methodInfo_AuthService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.authService.LoginResponse,
  /**
   * @param {!proto.authService.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authService.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.authService.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.authService.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authService.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authService.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authService.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.authService.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authService.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.authService.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authService.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


module.exports = proto.authService;

