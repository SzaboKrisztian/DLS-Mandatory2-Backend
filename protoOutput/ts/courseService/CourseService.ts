// Original file: proto/courseService.proto

import type * as grpc from '@grpc/grpc-js'
import type { AllCoursesReq as _courseService_AllCoursesReq, AllCoursesReq__Output as _courseService_AllCoursesReq__Output } from '../courseService/AllCoursesReq';
import type { AllCoursesRes as _courseService_AllCoursesRes, AllCoursesRes__Output as _courseService_AllCoursesRes__Output } from '../courseService/AllCoursesRes';
import type { AllStudentsReq as _courseService_AllStudentsReq, AllStudentsReq__Output as _courseService_AllStudentsReq__Output } from '../courseService/AllStudentsReq';
import type { AllStudentsRes as _courseService_AllStudentsRes, AllStudentsRes__Output as _courseService_AllStudentsRes__Output } from '../courseService/AllStudentsRes';
import type { AllTeachersReq as _courseService_AllTeachersReq, AllTeachersReq__Output as _courseService_AllTeachersReq__Output } from '../courseService/AllTeachersReq';
import type { AllTeachersRes as _courseService_AllTeachersRes, AllTeachersRes__Output as _courseService_AllTeachersRes__Output } from '../courseService/AllTeachersRes';
import type { Course as _courseService_Course, Course__Output as _courseService_Course__Output } from '../courseService/Course';
import type { CreateCourseReq as _courseService_CreateCourseReq, CreateCourseReq__Output as _courseService_CreateCourseReq__Output } from '../courseService/CreateCourseReq';
import type { DeleteCourseReq as _courseService_DeleteCourseReq, DeleteCourseReq__Output as _courseService_DeleteCourseReq__Output } from '../courseService/DeleteCourseReq';
import type { DeleteCourseRes as _courseService_DeleteCourseRes, DeleteCourseRes__Output as _courseService_DeleteCourseRes__Output } from '../courseService/DeleteCourseRes';
import type { GetTeachersForCourseReq as _courseService_GetTeachersForCourseReq, GetTeachersForCourseReq__Output as _courseService_GetTeachersForCourseReq__Output } from '../courseService/GetTeachersForCourseReq';
import type { GetTeachersForCourseRes as _courseService_GetTeachersForCourseRes, GetTeachersForCourseRes__Output as _courseService_GetTeachersForCourseRes__Output } from '../courseService/GetTeachersForCourseRes';
import type { MyCoursesReq as _courseService_MyCoursesReq, MyCoursesReq__Output as _courseService_MyCoursesReq__Output } from '../courseService/MyCoursesReq';
import type { MyCoursesRes as _courseService_MyCoursesRes, MyCoursesRes__Output as _courseService_MyCoursesRes__Output } from '../courseService/MyCoursesRes';
import type { MyPresencesReq as _courseService_MyPresencesReq, MyPresencesReq__Output as _courseService_MyPresencesReq__Output } from '../courseService/MyPresencesReq';
import type { MyPresencesRes as _courseService_MyPresencesRes, MyPresencesRes__Output as _courseService_MyPresencesRes__Output } from '../courseService/MyPresencesRes';
import type { PresencesForCourseReq as _courseService_PresencesForCourseReq, PresencesForCourseReq__Output as _courseService_PresencesForCourseReq__Output } from '../courseService/PresencesForCourseReq';
import type { PresencesForCourseRes as _courseService_PresencesForCourseRes, PresencesForCourseRes__Output as _courseService_PresencesForCourseRes__Output } from '../courseService/PresencesForCourseRes';
import type { RenameCourseReq as _courseService_RenameCourseReq, RenameCourseReq__Output as _courseService_RenameCourseReq__Output } from '../courseService/RenameCourseReq';
import type { StudentToCourseReq as _courseService_StudentToCourseReq, StudentToCourseReq__Output as _courseService_StudentToCourseReq__Output } from '../courseService/StudentToCourseReq';
import type { StudentToCourseRes as _courseService_StudentToCourseRes, StudentToCourseRes__Output as _courseService_StudentToCourseRes__Output } from '../courseService/StudentToCourseRes';
import type { StudentsForCourseReq as _courseService_StudentsForCourseReq, StudentsForCourseReq__Output as _courseService_StudentsForCourseReq__Output } from '../courseService/StudentsForCourseReq';
import type { StudentsForCourseRes as _courseService_StudentsForCourseRes, StudentsForCourseRes__Output as _courseService_StudentsForCourseRes__Output } from '../courseService/StudentsForCourseRes';
import type { TeacherForCourseReq as _courseService_TeacherForCourseReq, TeacherForCourseReq__Output as _courseService_TeacherForCourseReq__Output } from '../courseService/TeacherForCourseReq';
import type { TeacherForCourseRes as _courseService_TeacherForCourseRes, TeacherForCourseRes__Output as _courseService_TeacherForCourseRes__Output } from '../courseService/TeacherForCourseRes';

export interface CourseServiceClient extends grpc.Client {
  AddStudentToCourse(argument: _courseService_StudentToCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  AddStudentToCourse(argument: _courseService_StudentToCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  AddStudentToCourse(argument: _courseService_StudentToCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  AddStudentToCourse(argument: _courseService_StudentToCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  addStudentToCourse(argument: _courseService_StudentToCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  addStudentToCourse(argument: _courseService_StudentToCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  addStudentToCourse(argument: _courseService_StudentToCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  addStudentToCourse(argument: _courseService_StudentToCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  
  AddTeacherToCourse(argument: _courseService_TeacherForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  AddTeacherToCourse(argument: _courseService_TeacherForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  AddTeacherToCourse(argument: _courseService_TeacherForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  AddTeacherToCourse(argument: _courseService_TeacherForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  addTeacherToCourse(argument: _courseService_TeacherForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  addTeacherToCourse(argument: _courseService_TeacherForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  addTeacherToCourse(argument: _courseService_TeacherForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  addTeacherToCourse(argument: _courseService_TeacherForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  
  CreateCourse(argument: _courseService_CreateCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  CreateCourse(argument: _courseService_CreateCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  CreateCourse(argument: _courseService_CreateCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  CreateCourse(argument: _courseService_CreateCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  createCourse(argument: _courseService_CreateCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  createCourse(argument: _courseService_CreateCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  createCourse(argument: _courseService_CreateCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  createCourse(argument: _courseService_CreateCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  
  DeleteCourse(argument: _courseService_DeleteCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_DeleteCourseRes__Output) => void): grpc.ClientUnaryCall;
  DeleteCourse(argument: _courseService_DeleteCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_DeleteCourseRes__Output) => void): grpc.ClientUnaryCall;
  DeleteCourse(argument: _courseService_DeleteCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_DeleteCourseRes__Output) => void): grpc.ClientUnaryCall;
  DeleteCourse(argument: _courseService_DeleteCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_DeleteCourseRes__Output) => void): grpc.ClientUnaryCall;
  deleteCourse(argument: _courseService_DeleteCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_DeleteCourseRes__Output) => void): grpc.ClientUnaryCall;
  deleteCourse(argument: _courseService_DeleteCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_DeleteCourseRes__Output) => void): grpc.ClientUnaryCall;
  deleteCourse(argument: _courseService_DeleteCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_DeleteCourseRes__Output) => void): grpc.ClientUnaryCall;
  deleteCourse(argument: _courseService_DeleteCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_DeleteCourseRes__Output) => void): grpc.ClientUnaryCall;
  
  GetAllCourses(argument: _courseService_AllCoursesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllCoursesRes__Output) => void): grpc.ClientUnaryCall;
  GetAllCourses(argument: _courseService_AllCoursesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_AllCoursesRes__Output) => void): grpc.ClientUnaryCall;
  GetAllCourses(argument: _courseService_AllCoursesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllCoursesRes__Output) => void): grpc.ClientUnaryCall;
  GetAllCourses(argument: _courseService_AllCoursesReq, callback: (error?: grpc.ServiceError, result?: _courseService_AllCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getAllCourses(argument: _courseService_AllCoursesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getAllCourses(argument: _courseService_AllCoursesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_AllCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getAllCourses(argument: _courseService_AllCoursesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getAllCourses(argument: _courseService_AllCoursesReq, callback: (error?: grpc.ServiceError, result?: _courseService_AllCoursesRes__Output) => void): grpc.ClientUnaryCall;
  
  GetAllStudents(argument: _courseService_AllStudentsReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllStudentsRes__Output) => void): grpc.ClientUnaryCall;
  GetAllStudents(argument: _courseService_AllStudentsReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_AllStudentsRes__Output) => void): grpc.ClientUnaryCall;
  GetAllStudents(argument: _courseService_AllStudentsReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllStudentsRes__Output) => void): grpc.ClientUnaryCall;
  GetAllStudents(argument: _courseService_AllStudentsReq, callback: (error?: grpc.ServiceError, result?: _courseService_AllStudentsRes__Output) => void): grpc.ClientUnaryCall;
  getAllStudents(argument: _courseService_AllStudentsReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllStudentsRes__Output) => void): grpc.ClientUnaryCall;
  getAllStudents(argument: _courseService_AllStudentsReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_AllStudentsRes__Output) => void): grpc.ClientUnaryCall;
  getAllStudents(argument: _courseService_AllStudentsReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllStudentsRes__Output) => void): grpc.ClientUnaryCall;
  getAllStudents(argument: _courseService_AllStudentsReq, callback: (error?: grpc.ServiceError, result?: _courseService_AllStudentsRes__Output) => void): grpc.ClientUnaryCall;
  
  GetAllTeachers(argument: _courseService_AllTeachersReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllTeachersRes__Output) => void): grpc.ClientUnaryCall;
  GetAllTeachers(argument: _courseService_AllTeachersReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_AllTeachersRes__Output) => void): grpc.ClientUnaryCall;
  GetAllTeachers(argument: _courseService_AllTeachersReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllTeachersRes__Output) => void): grpc.ClientUnaryCall;
  GetAllTeachers(argument: _courseService_AllTeachersReq, callback: (error?: grpc.ServiceError, result?: _courseService_AllTeachersRes__Output) => void): grpc.ClientUnaryCall;
  getAllTeachers(argument: _courseService_AllTeachersReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllTeachersRes__Output) => void): grpc.ClientUnaryCall;
  getAllTeachers(argument: _courseService_AllTeachersReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_AllTeachersRes__Output) => void): grpc.ClientUnaryCall;
  getAllTeachers(argument: _courseService_AllTeachersReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_AllTeachersRes__Output) => void): grpc.ClientUnaryCall;
  getAllTeachers(argument: _courseService_AllTeachersReq, callback: (error?: grpc.ServiceError, result?: _courseService_AllTeachersRes__Output) => void): grpc.ClientUnaryCall;
  
  GetMyCourses(argument: _courseService_MyCoursesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  GetMyCourses(argument: _courseService_MyCoursesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  GetMyCourses(argument: _courseService_MyCoursesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  GetMyCourses(argument: _courseService_MyCoursesReq, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getMyCourses(argument: _courseService_MyCoursesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getMyCourses(argument: _courseService_MyCoursesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getMyCourses(argument: _courseService_MyCoursesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  getMyCourses(argument: _courseService_MyCoursesReq, callback: (error?: grpc.ServiceError, result?: _courseService_MyCoursesRes__Output) => void): grpc.ClientUnaryCall;
  
  GetPresencesForCourse(argument: _courseService_PresencesForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_PresencesForCourseRes__Output) => void): grpc.ClientUnaryCall;
  GetPresencesForCourse(argument: _courseService_PresencesForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_PresencesForCourseRes__Output) => void): grpc.ClientUnaryCall;
  GetPresencesForCourse(argument: _courseService_PresencesForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_PresencesForCourseRes__Output) => void): grpc.ClientUnaryCall;
  GetPresencesForCourse(argument: _courseService_PresencesForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_PresencesForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getPresencesForCourse(argument: _courseService_PresencesForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_PresencesForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getPresencesForCourse(argument: _courseService_PresencesForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_PresencesForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getPresencesForCourse(argument: _courseService_PresencesForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_PresencesForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getPresencesForCourse(argument: _courseService_PresencesForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_PresencesForCourseRes__Output) => void): grpc.ClientUnaryCall;
  
  GetStudentsForCourse(argument: _courseService_StudentsForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentsForCourseRes__Output) => void): grpc.ClientUnaryCall;
  GetStudentsForCourse(argument: _courseService_StudentsForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_StudentsForCourseRes__Output) => void): grpc.ClientUnaryCall;
  GetStudentsForCourse(argument: _courseService_StudentsForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentsForCourseRes__Output) => void): grpc.ClientUnaryCall;
  GetStudentsForCourse(argument: _courseService_StudentsForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_StudentsForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getStudentsForCourse(argument: _courseService_StudentsForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentsForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getStudentsForCourse(argument: _courseService_StudentsForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_StudentsForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getStudentsForCourse(argument: _courseService_StudentsForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentsForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getStudentsForCourse(argument: _courseService_StudentsForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_StudentsForCourseRes__Output) => void): grpc.ClientUnaryCall;
  
  GetTeachersForCourse(argument: _courseService_GetTeachersForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_GetTeachersForCourseRes__Output) => void): grpc.ClientUnaryCall;
  GetTeachersForCourse(argument: _courseService_GetTeachersForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_GetTeachersForCourseRes__Output) => void): grpc.ClientUnaryCall;
  GetTeachersForCourse(argument: _courseService_GetTeachersForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_GetTeachersForCourseRes__Output) => void): grpc.ClientUnaryCall;
  GetTeachersForCourse(argument: _courseService_GetTeachersForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_GetTeachersForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getTeachersForCourse(argument: _courseService_GetTeachersForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_GetTeachersForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getTeachersForCourse(argument: _courseService_GetTeachersForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_GetTeachersForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getTeachersForCourse(argument: _courseService_GetTeachersForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_GetTeachersForCourseRes__Output) => void): grpc.ClientUnaryCall;
  getTeachersForCourse(argument: _courseService_GetTeachersForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_GetTeachersForCourseRes__Output) => void): grpc.ClientUnaryCall;
  
  GeyMyPresences(argument: _courseService_MyPresencesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  GeyMyPresences(argument: _courseService_MyPresencesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  GeyMyPresences(argument: _courseService_MyPresencesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  GeyMyPresences(argument: _courseService_MyPresencesReq, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  geyMyPresences(argument: _courseService_MyPresencesReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  geyMyPresences(argument: _courseService_MyPresencesReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  geyMyPresences(argument: _courseService_MyPresencesReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  geyMyPresences(argument: _courseService_MyPresencesReq, callback: (error?: grpc.ServiceError, result?: _courseService_MyPresencesRes__Output) => void): grpc.ClientUnaryCall;
  
  RemoveStudentFromCourse(argument: _courseService_StudentToCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  RemoveStudentFromCourse(argument: _courseService_StudentToCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  RemoveStudentFromCourse(argument: _courseService_StudentToCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  RemoveStudentFromCourse(argument: _courseService_StudentToCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  removeStudentFromCourse(argument: _courseService_StudentToCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  removeStudentFromCourse(argument: _courseService_StudentToCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  removeStudentFromCourse(argument: _courseService_StudentToCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  removeStudentFromCourse(argument: _courseService_StudentToCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_StudentToCourseRes__Output) => void): grpc.ClientUnaryCall;
  
  RemoveTeacherFromCourse(argument: _courseService_TeacherForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  RemoveTeacherFromCourse(argument: _courseService_TeacherForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  RemoveTeacherFromCourse(argument: _courseService_TeacherForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  RemoveTeacherFromCourse(argument: _courseService_TeacherForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  removeTeacherFromCourse(argument: _courseService_TeacherForCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  removeTeacherFromCourse(argument: _courseService_TeacherForCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  removeTeacherFromCourse(argument: _courseService_TeacherForCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  removeTeacherFromCourse(argument: _courseService_TeacherForCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_TeacherForCourseRes__Output) => void): grpc.ClientUnaryCall;
  
  RenameCourse(argument: _courseService_RenameCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  RenameCourse(argument: _courseService_RenameCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  RenameCourse(argument: _courseService_RenameCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  RenameCourse(argument: _courseService_RenameCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  renameCourse(argument: _courseService_RenameCourseReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  renameCourse(argument: _courseService_RenameCourseReq, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  renameCourse(argument: _courseService_RenameCourseReq, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  renameCourse(argument: _courseService_RenameCourseReq, callback: (error?: grpc.ServiceError, result?: _courseService_Course__Output) => void): grpc.ClientUnaryCall;
  
}

export interface CourseServiceHandlers extends grpc.UntypedServiceImplementation {
  AddStudentToCourse: grpc.handleUnaryCall<_courseService_StudentToCourseReq__Output, _courseService_StudentToCourseRes>;
  
  AddTeacherToCourse: grpc.handleUnaryCall<_courseService_TeacherForCourseReq__Output, _courseService_TeacherForCourseRes>;
  
  CreateCourse: grpc.handleUnaryCall<_courseService_CreateCourseReq__Output, _courseService_Course>;
  
  DeleteCourse: grpc.handleUnaryCall<_courseService_DeleteCourseReq__Output, _courseService_DeleteCourseRes>;
  
  GetAllCourses: grpc.handleUnaryCall<_courseService_AllCoursesReq__Output, _courseService_AllCoursesRes>;
  
  GetAllStudents: grpc.handleUnaryCall<_courseService_AllStudentsReq__Output, _courseService_AllStudentsRes>;
  
  GetAllTeachers: grpc.handleUnaryCall<_courseService_AllTeachersReq__Output, _courseService_AllTeachersRes>;
  
  GetMyCourses: grpc.handleUnaryCall<_courseService_MyCoursesReq__Output, _courseService_MyCoursesRes>;
  
  GetPresencesForCourse: grpc.handleUnaryCall<_courseService_PresencesForCourseReq__Output, _courseService_PresencesForCourseRes>;
  
  GetStudentsForCourse: grpc.handleUnaryCall<_courseService_StudentsForCourseReq__Output, _courseService_StudentsForCourseRes>;
  
  GetTeachersForCourse: grpc.handleUnaryCall<_courseService_GetTeachersForCourseReq__Output, _courseService_GetTeachersForCourseRes>;
  
  GeyMyPresences: grpc.handleUnaryCall<_courseService_MyPresencesReq__Output, _courseService_MyPresencesRes>;
  
  RemoveStudentFromCourse: grpc.handleUnaryCall<_courseService_StudentToCourseReq__Output, _courseService_StudentToCourseRes>;
  
  RemoveTeacherFromCourse: grpc.handleUnaryCall<_courseService_TeacherForCourseReq__Output, _courseService_TeacherForCourseRes>;
  
  RenameCourse: grpc.handleUnaryCall<_courseService_RenameCourseReq__Output, _courseService_Course>;
  
}
