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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.AllStudentsReq,
 *   !proto.courseService.AllStudentsRes>}
 */
const methodDescriptor_CourseService_GetAllStudents = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/GetAllStudents',
  grpc.web.MethodType.UNARY,
  proto.courseService.AllStudentsReq,
  proto.courseService.AllStudentsRes,
  /**
   * @param {!proto.courseService.AllStudentsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.AllStudentsRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.AllStudentsReq,
 *   !proto.courseService.AllStudentsRes>}
 */
const methodInfo_CourseService_GetAllStudents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.AllStudentsRes,
  /**
   * @param {!proto.courseService.AllStudentsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.AllStudentsRes.deserializeBinary
);


/**
 * @param {!proto.courseService.AllStudentsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.AllStudentsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.AllStudentsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.getAllStudents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/GetAllStudents',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetAllStudents,
      callback);
};


/**
 * @param {!proto.courseService.AllStudentsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.AllStudentsRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.getAllStudents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/GetAllStudents',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetAllStudents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.StudentsForCourseReq,
 *   !proto.courseService.StudentsForCourseRes>}
 */
const methodDescriptor_CourseService_GetStudentsForCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/GetStudentsForCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.StudentsForCourseReq,
  proto.courseService.StudentsForCourseRes,
  /**
   * @param {!proto.courseService.StudentsForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.StudentsForCourseRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.StudentsForCourseReq,
 *   !proto.courseService.StudentsForCourseRes>}
 */
const methodInfo_CourseService_GetStudentsForCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.StudentsForCourseRes,
  /**
   * @param {!proto.courseService.StudentsForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.StudentsForCourseRes.deserializeBinary
);


/**
 * @param {!proto.courseService.StudentsForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.StudentsForCourseRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.StudentsForCourseRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.getStudentsForCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/GetStudentsForCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetStudentsForCourse,
      callback);
};


/**
 * @param {!proto.courseService.StudentsForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.StudentsForCourseRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.getStudentsForCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/GetStudentsForCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetStudentsForCourse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.StudentToCourseReq,
 *   !proto.courseService.StudentToCourseRes>}
 */
const methodDescriptor_CourseService_AddStudentToCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/AddStudentToCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.StudentToCourseReq,
  proto.courseService.StudentToCourseRes,
  /**
   * @param {!proto.courseService.StudentToCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.StudentToCourseRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.StudentToCourseReq,
 *   !proto.courseService.StudentToCourseRes>}
 */
const methodInfo_CourseService_AddStudentToCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.StudentToCourseRes,
  /**
   * @param {!proto.courseService.StudentToCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.StudentToCourseRes.deserializeBinary
);


/**
 * @param {!proto.courseService.StudentToCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.StudentToCourseRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.StudentToCourseRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.addStudentToCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/AddStudentToCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_AddStudentToCourse,
      callback);
};


/**
 * @param {!proto.courseService.StudentToCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.StudentToCourseRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.addStudentToCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/AddStudentToCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_AddStudentToCourse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.StudentToCourseReq,
 *   !proto.courseService.StudentToCourseRes>}
 */
const methodDescriptor_CourseService_RemoveStudentFromCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/RemoveStudentFromCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.StudentToCourseReq,
  proto.courseService.StudentToCourseRes,
  /**
   * @param {!proto.courseService.StudentToCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.StudentToCourseRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.StudentToCourseReq,
 *   !proto.courseService.StudentToCourseRes>}
 */
const methodInfo_CourseService_RemoveStudentFromCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.StudentToCourseRes,
  /**
   * @param {!proto.courseService.StudentToCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.StudentToCourseRes.deserializeBinary
);


/**
 * @param {!proto.courseService.StudentToCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.StudentToCourseRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.StudentToCourseRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.removeStudentFromCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/RemoveStudentFromCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_RemoveStudentFromCourse,
      callback);
};


/**
 * @param {!proto.courseService.StudentToCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.StudentToCourseRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.removeStudentFromCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/RemoveStudentFromCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_RemoveStudentFromCourse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.PresencesForCourseReq,
 *   !proto.courseService.PresencesForCourseRes>}
 */
const methodDescriptor_CourseService_GetPresencesForCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/GetPresencesForCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.PresencesForCourseReq,
  proto.courseService.PresencesForCourseRes,
  /**
   * @param {!proto.courseService.PresencesForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.PresencesForCourseRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.PresencesForCourseReq,
 *   !proto.courseService.PresencesForCourseRes>}
 */
const methodInfo_CourseService_GetPresencesForCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.PresencesForCourseRes,
  /**
   * @param {!proto.courseService.PresencesForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.PresencesForCourseRes.deserializeBinary
);


/**
 * @param {!proto.courseService.PresencesForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.PresencesForCourseRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.PresencesForCourseRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.getPresencesForCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/GetPresencesForCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetPresencesForCourse,
      callback);
};


/**
 * @param {!proto.courseService.PresencesForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.PresencesForCourseRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.getPresencesForCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/GetPresencesForCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetPresencesForCourse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.AllCoursesReq,
 *   !proto.courseService.AllCoursesRes>}
 */
const methodDescriptor_CourseService_GetAllCourses = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/GetAllCourses',
  grpc.web.MethodType.UNARY,
  proto.courseService.AllCoursesReq,
  proto.courseService.AllCoursesRes,
  /**
   * @param {!proto.courseService.AllCoursesReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.AllCoursesRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.AllCoursesReq,
 *   !proto.courseService.AllCoursesRes>}
 */
const methodInfo_CourseService_GetAllCourses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.AllCoursesRes,
  /**
   * @param {!proto.courseService.AllCoursesReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.AllCoursesRes.deserializeBinary
);


/**
 * @param {!proto.courseService.AllCoursesReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.AllCoursesRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.AllCoursesRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.getAllCourses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/GetAllCourses',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetAllCourses,
      callback);
};


/**
 * @param {!proto.courseService.AllCoursesReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.AllCoursesRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.getAllCourses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/GetAllCourses',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetAllCourses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.AllTeachersReq,
 *   !proto.courseService.AllTeachersRes>}
 */
const methodDescriptor_CourseService_GetAllTeachers = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/GetAllTeachers',
  grpc.web.MethodType.UNARY,
  proto.courseService.AllTeachersReq,
  proto.courseService.AllTeachersRes,
  /**
   * @param {!proto.courseService.AllTeachersReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.AllTeachersRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.AllTeachersReq,
 *   !proto.courseService.AllTeachersRes>}
 */
const methodInfo_CourseService_GetAllTeachers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.AllTeachersRes,
  /**
   * @param {!proto.courseService.AllTeachersReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.AllTeachersRes.deserializeBinary
);


/**
 * @param {!proto.courseService.AllTeachersReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.AllTeachersRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.AllTeachersRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.getAllTeachers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/GetAllTeachers',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetAllTeachers,
      callback);
};


/**
 * @param {!proto.courseService.AllTeachersReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.AllTeachersRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.getAllTeachers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/GetAllTeachers',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetAllTeachers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.GetTeachersForCourseReq,
 *   !proto.courseService.GetTeachersForCourseRes>}
 */
const methodDescriptor_CourseService_GetTeachersForCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/GetTeachersForCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.GetTeachersForCourseReq,
  proto.courseService.GetTeachersForCourseRes,
  /**
   * @param {!proto.courseService.GetTeachersForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.GetTeachersForCourseRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.GetTeachersForCourseReq,
 *   !proto.courseService.GetTeachersForCourseRes>}
 */
const methodInfo_CourseService_GetTeachersForCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.GetTeachersForCourseRes,
  /**
   * @param {!proto.courseService.GetTeachersForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.GetTeachersForCourseRes.deserializeBinary
);


/**
 * @param {!proto.courseService.GetTeachersForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.GetTeachersForCourseRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.GetTeachersForCourseRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.getTeachersForCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/GetTeachersForCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetTeachersForCourse,
      callback);
};


/**
 * @param {!proto.courseService.GetTeachersForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.GetTeachersForCourseRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.getTeachersForCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/GetTeachersForCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_GetTeachersForCourse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.TeacherForCourseReq,
 *   !proto.courseService.TeacherForCourseRes>}
 */
const methodDescriptor_CourseService_AddTeacherToCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/AddTeacherToCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.TeacherForCourseReq,
  proto.courseService.TeacherForCourseRes,
  /**
   * @param {!proto.courseService.TeacherForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.TeacherForCourseRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.TeacherForCourseReq,
 *   !proto.courseService.TeacherForCourseRes>}
 */
const methodInfo_CourseService_AddTeacherToCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.TeacherForCourseRes,
  /**
   * @param {!proto.courseService.TeacherForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.TeacherForCourseRes.deserializeBinary
);


/**
 * @param {!proto.courseService.TeacherForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.TeacherForCourseRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.TeacherForCourseRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.addTeacherToCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/AddTeacherToCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_AddTeacherToCourse,
      callback);
};


/**
 * @param {!proto.courseService.TeacherForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.TeacherForCourseRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.addTeacherToCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/AddTeacherToCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_AddTeacherToCourse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.TeacherForCourseReq,
 *   !proto.courseService.TeacherForCourseRes>}
 */
const methodDescriptor_CourseService_RemoveTeacherFromCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/RemoveTeacherFromCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.TeacherForCourseReq,
  proto.courseService.TeacherForCourseRes,
  /**
   * @param {!proto.courseService.TeacherForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.TeacherForCourseRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.TeacherForCourseReq,
 *   !proto.courseService.TeacherForCourseRes>}
 */
const methodInfo_CourseService_RemoveTeacherFromCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.TeacherForCourseRes,
  /**
   * @param {!proto.courseService.TeacherForCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.TeacherForCourseRes.deserializeBinary
);


/**
 * @param {!proto.courseService.TeacherForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.TeacherForCourseRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.TeacherForCourseRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.removeTeacherFromCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/RemoveTeacherFromCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_RemoveTeacherFromCourse,
      callback);
};


/**
 * @param {!proto.courseService.TeacherForCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.TeacherForCourseRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.removeTeacherFromCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/RemoveTeacherFromCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_RemoveTeacherFromCourse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.CreateCourseReq,
 *   !proto.courseService.Course>}
 */
const methodDescriptor_CourseService_CreateCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/CreateCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.CreateCourseReq,
  proto.courseService.Course,
  /**
   * @param {!proto.courseService.CreateCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.Course.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.CreateCourseReq,
 *   !proto.courseService.Course>}
 */
const methodInfo_CourseService_CreateCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.Course,
  /**
   * @param {!proto.courseService.CreateCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.Course.deserializeBinary
);


/**
 * @param {!proto.courseService.CreateCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.Course)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.Course>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.createCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/CreateCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_CreateCourse,
      callback);
};


/**
 * @param {!proto.courseService.CreateCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.Course>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.createCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/CreateCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_CreateCourse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.RenameCourseReq,
 *   !proto.courseService.Course>}
 */
const methodDescriptor_CourseService_RenameCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/RenameCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.RenameCourseReq,
  proto.courseService.Course,
  /**
   * @param {!proto.courseService.RenameCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.Course.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.RenameCourseReq,
 *   !proto.courseService.Course>}
 */
const methodInfo_CourseService_RenameCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.Course,
  /**
   * @param {!proto.courseService.RenameCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.Course.deserializeBinary
);


/**
 * @param {!proto.courseService.RenameCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.Course)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.Course>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.renameCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/RenameCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_RenameCourse,
      callback);
};


/**
 * @param {!proto.courseService.RenameCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.Course>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.renameCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/RenameCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_RenameCourse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.courseService.DeleteCourseReq,
 *   !proto.courseService.DeleteCourseRes>}
 */
const methodDescriptor_CourseService_DeleteCourse = new grpc.web.MethodDescriptor(
  '/courseService.CourseService/DeleteCourse',
  grpc.web.MethodType.UNARY,
  proto.courseService.DeleteCourseReq,
  proto.courseService.DeleteCourseRes,
  /**
   * @param {!proto.courseService.DeleteCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.DeleteCourseRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.courseService.DeleteCourseReq,
 *   !proto.courseService.DeleteCourseRes>}
 */
const methodInfo_CourseService_DeleteCourse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.courseService.DeleteCourseRes,
  /**
   * @param {!proto.courseService.DeleteCourseReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.courseService.DeleteCourseRes.deserializeBinary
);


/**
 * @param {!proto.courseService.DeleteCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.courseService.DeleteCourseRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.courseService.DeleteCourseRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.courseService.CourseServiceClient.prototype.deleteCourse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/courseService.CourseService/DeleteCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_DeleteCourse,
      callback);
};


/**
 * @param {!proto.courseService.DeleteCourseReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.courseService.DeleteCourseRes>}
 *     Promise that resolves to the response
 */
proto.courseService.CourseServicePromiseClient.prototype.deleteCourse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/courseService.CourseService/DeleteCourse',
      request,
      metadata || {},
      methodDescriptor_CourseService_DeleteCourse);
};


module.exports = proto.courseService;

