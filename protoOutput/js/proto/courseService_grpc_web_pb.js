/**
 * @fileoverview gRPC-Web generated client stub for courseService
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.courseService = require('./courseService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.courseService.CourseServiceClient =
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
proto.courseService.CourseServicePromiseClient =
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
 *   !proto.courseService.MyCoursesReq,
 *   !proto.courseService.MyCoursesRes>}
 */
const methodDescriptor_CourseService_GetMyCourses = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/GetMyCourses',
  grpc.web.MethodType.UNARY,
  proto.courseService.MyCoursesReq,
  proto.courseService.MyCoursesRes,
  /**
   * @param {!proto.courseService.MyCoursesReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.MyCoursesRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.MyCoursesReq,
 *   !proto.courseService.MyCoursesRes>}
 */
const methodInfo_CourseService_GetMyCourses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.MyCoursesRes,
  /**
   * @param {!proto.courseService.MyCoursesReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.MyCoursesRes.deserializeBinary
);


/**
 * @param {!proto.courseService.MyCoursesReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.MyCoursesRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.MyCoursesRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.getMyCourses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/GetMyCourses',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetMyCourses,
      callback);
};


/**
 * @param {!proto.courseService.MyCoursesReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.MyCoursesRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.getMyCourses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/GetMyCourses',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetMyCourses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.MyPresencesReq,
 *   !proto.courseService.MyPresencesRes>}
 */
const methodDescriptor_CourseService_GeyMyPresences = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/GeyMyPresences',
  grpc.web.MethodType.UNARY,
  proto.courseService.MyPresencesReq,
  proto.courseService.MyPresencesRes,
  /**
   * @param {!proto.courseService.MyPresencesReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.MyPresencesRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.MyPresencesReq,
 *   !proto.courseService.MyPresencesRes>}
 */
const methodInfo_CourseService_GeyMyPresences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.MyPresencesRes,
  /**
   * @param {!proto.courseService.MyPresencesReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.MyPresencesRes.deserializeBinary
);


/**
 * @param {!proto.courseService.MyPresencesReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.MyPresencesRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.MyPresencesRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.geyMyPresences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/GeyMyPresences',
      request,
      metadata || {},
      methodDescriptor_CourseService_GeyMyPresences,
      callback);
};


/**
 * @param {!proto.courseService.MyPresencesReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.MyPresencesRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.geyMyPresences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/GeyMyPresences',
      request,
      metadata || {},
      methodDescriptor_CourseService_GeyMyPresences);
};


module.exports = proto.courseService;

