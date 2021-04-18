import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { CourseServiceHandlers } from
    "../../protoOutput/ts/courseService/CourseService";
import { ProtoGrpcType as CourseServiceType } from
    "../../protoOutput/ts/courseService";
import { MyCoursesReq } from
    "../../protoOutput/ts/courseService/MyCoursesReq"
import { MyCoursesRes } from
    "../../protoOutput/ts/courseService/MyCoursesRes";
import { MyPresencesReq } from
    "../../protoOutput/ts/courseService/MyPresencesReq";
import { MyPresencesRes } from
    "../../protoOutput/ts/courseService/MyPresencesRes";
import { AllStudentsReq } from
    "../../protoOutput/ts/courseService/AllStudentsReq";
import { AllStudentsRes } from
    "../../protoOutput/ts/courseService/AllStudentsRes";
import { StudentsForCourseReq } from
    "../../protoOutput/ts/courseService/StudentsForCourseReq";
import { StudentsForCourseRes } from
    "../../protoOutput/ts/courseService/StudentsForCourseRes";
import { StudentToCourseReq } from
    "../../protoOutput/ts/courseService/StudentToCourseReq";
import { StudentToCourseRes } from
    "../../protoOutput/ts/courseService/StudentToCourseRes";
import { PresencesForCourseReq } from
    "../../protoOutput/ts/courseService/PresencesForCourseReq";
import { PresencesForCourseRes } from
    "../../protoOutput/ts/courseService/PresencesForCourseRes";
import { AllCoursesReq } from
    "../../protoOutput/ts/courseService/AllCoursesReq";
import { AllCoursesRes } from
    "../../protoOutput/ts/courseService/AllCoursesRes";
import { AllTeachersReq } from
    "../../protoOutput/ts/courseService/AllTeachersReq";
import { AllTeachersRes } from
    "../../protoOutput/ts/courseService/AllTeachersRes";
import { GetTeachersForCourseReq } from
    "../../protoOutput/ts/courseService/GetTeachersForCourseReq";
import { GetTeachersForCourseRes } from
    "../../protoOutput/ts/courseService/GetTeachersForCourseRes";
import { TeacherForCourseReq } from
    "../../protoOutput/ts/courseService/TeacherForCourseReq";
import { TeacherForCourseRes } from
    "../../protoOutput/ts/courseService/TeacherForCourseRes";
import { Course as RpcCourse } from
    "../../protoOutput/ts/courseService/Course";
import { CreateCourseReq } from
    "../../protoOutput/ts/courseService/CreateCourseReq";
import { RenameCourseReq } from
    "../../protoOutput/ts/courseService/RenameCourseReq";
import { DeleteCourseReq } from
    "../../protoOutput/ts/courseService/DeleteCourseReq";
import { DeleteCourseRes } from
    "../../protoOutput/ts/courseService/DeleteCourseRes";

import { getManager, getRepository } from "typeorm";
import {
    Course,
    RollCall,
    Presence,
    Student,
    Teacher
} from "../entity";
import {
    ensureAccount,
    ensureStudent,
    ensureTeacher,
    ensureAdmin,
} from "../utils";

export const courseHandlers: CourseServiceHandlers = {

    // Common procedures

    async GetMyCourses(
        call: grpc.ServerUnaryCall<MyCoursesReq, MyCoursesRes>,
        callback: grpc.sendUnaryData<MyCoursesRes>
    ) {
        const account = await ensureAccount(call, callback);
        if (!account) return;

        const manager = getManager();

        let user: Student | Teacher;
        const student = await manager.findOne(Student, {
            where: { account },
            relations: ["account", "courses"]
        });

        if (student) {
            user = student;
        } else {
            user = await manager.findOne(Teacher, {
                where: { account },
                relations: ["account", "courses"]
            });
        }

        const result = user.courses.map(c => ({ id: c.id, name: c.name }));

        callback(null, { courses: result });
    },

    // Student procedures

    async GeyMyPresences(
        call: grpc.ServerUnaryCall<MyPresencesReq, MyPresencesRes>,
        callback: grpc.sendUnaryData<MyPresencesRes>
    ) {
        const student = await ensureStudent(call, callback);
        if (!student) return;

        const manager = getManager();
        const { courseId } = call.request;

        const presences = await manager.find(Presence, {
            where: {
                student: { id: student.id },
                courseId
            },
            relations: ["student"]
        });

        const result = presences.map(p => ({
            id: p.id,
            rollCallId: p.rollCall.id,
            timestamp: p.createdAt.toISOString()
        }));

        callback(null, { presences: result });
    },

    // Teacher procedures

    async GetAllStudents(
        call: grpc.ServerUnaryCall<AllStudentsReq, AllStudentsRes>,
        callback: grpc.sendUnaryData<AllStudentsRes>
    ) {
        const teacher = await ensureTeacher(call, callback);
        if (!teacher) return;

        const manager = getManager();
        const students = await manager.find(Student, {
            relations: ["account", "courses"]
        });

        const result = students.map(s => {
            return s.account === undefined ?
            {
                id: s.id,
                firstName: s.firstName,
                lastName: s.lastName,
                courses: s.courses
            } :
            {
                id: s.id,
                firstName: s.firstName,
                lastName: s.lastName,
                courses: s.courses,
                accountId: s.account.id,
                email: s.account.email
            }
        });

        callback(null, { students: result });
    },

    async GetStudentsForCourse(
        call: grpc.ServerUnaryCall<StudentsForCourseReq, StudentsForCourseRes>,
        callback: grpc.sendUnaryData<StudentsForCourseRes>
    ) {
        const teacher = await ensureTeacher(call, callback);
        if (!teacher) return;

        const manager = getManager();
        const { courseId } = call.request;
        const course = await manager.findOne(Course, {
            where: { id: courseId },
            relations: ["students", "students.account", "students.courses"]
        });
        if (!course) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Course not found"
            });
            return;
        }

        const students = course.students.map(s => {
            return s.account === undefined ?
            {
                id: s.id,
                firstName: s.firstName,
                lastName: s.lastName,
                courses: s.courses
            } :
            {
                id: s.id,
                firstName: s.firstName,
                lastName: s.lastName,
                courses: s.courses,
                accountId: s.account.id,
                email: s.account.email
            }
        });
        
        callback(null, { students });
    },

    async GetPresencesForCourse(
        call: grpc.ServerUnaryCall<PresencesForCourseReq, PresencesForCourseRes>,
        callback: grpc.sendUnaryData<PresencesForCourseRes>
    ) {
        const teacher = await ensureTeacher(call, callback);
        if (!teacher) return;
        
        const manager = getManager();

        const { courseId } = call.request;
        const rollCalls = await manager.find(RollCall, {
            where: { course: { id: courseId } },
            relations: ["presences", "presences.student", "presences.markedBy"]
        });

        let result = [];
        rollCalls.forEach(rc => {
            result = result.concat(rc.presences.map(p => ({
                id: p.id,
                rollCallId: rc.id,
                timestamp: p.createdAt.toISOString(),
                studentId: p.student.id,
                teacherId: p.markedBy.id
            })));
        });

        callback(null, { presences: result });
    },

    // Admin procedures

    async GetAllCourses(
        call: grpc.ServerUnaryCall<AllCoursesReq, AllCoursesRes>,
        callback: grpc.sendUnaryData<AllCoursesRes>
    ) {
        const teacher = await ensureAdmin(call, callback);
        if (!teacher) return;

        const manager = getManager();
        const courses = await manager.find(Course);
        
        callback(null, { courses });
    },

    async GetAllTeachers(
        call: grpc.ServerUnaryCall<AllTeachersReq, AllTeachersRes>,
        callback: grpc.sendUnaryData<AllTeachersRes>
    ) {
        const teacher = await ensureAdmin(call, callback);
        if (!teacher) return;

        const manager = getManager();
        const teachers = await manager.find(Teacher, {
            relations: ["account", "courses"]
        });

        const result = teachers.map(t => {
            return t.account === undefined ?
            {
                id: t.id,
                firstName: t.firstName,
                lastName: t.lastName,
                courses: t.courses
            } :
            {
                id: t.id,
                firstName: t.firstName,
                lastName: t.lastName,
                courses: t.courses,
                accountId: t.account.id,
                email: t.account.email
            }
        });

        callback(null, { teachers: result });
    },

    async AddStudentToCourse(
        call: grpc.ServerUnaryCall<StudentToCourseReq, StudentToCourseRes>,
        callback: grpc.sendUnaryData<StudentToCourseRes>
    ) {
        const teacher = await ensureAdmin(call, callback);
        if (!teacher) return;

        const manager = getManager();

        const { courseId, studentId } = call.request;
        const course = await manager.findOne(Course, {
            where: { id: courseId },
            relations: ["students"]
        });
        const student = await manager.findOne(Student, {
            where: { id: studentId }
        });

        if (!course || !student) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Invalid student or course specified."
            });
            return;
        }

        if (course.students.find(s => s.id === student.id)) {
            callback({
                code: grpc.status.INTERNAL,
                message: "Student is already enrolled in that course."
            });
            return;
        }

        course.students.push(student);
        course.save();

        callback(null);
    },

    async RemoveStudentFromCourse(
        call: grpc.ServerUnaryCall<StudentToCourseReq, StudentToCourseRes>,
        callback: grpc.sendUnaryData<StudentToCourseRes>
    ) {
        const teacher = await ensureAdmin(call, callback);
        if (!teacher) return;
        
        const manager = getManager();

        const { courseId, studentId } = call.request;
        const course = await manager.findOne(Course, {
            where: { id: courseId },
            relations: ["students"]
        });

        if (!course) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Invalid course specified."
            });
            return;
        }

        const index = course.students.findIndex(s => s.id === studentId);
        if (index === -1) {
            callback({
                code: grpc.status.INTERNAL,
                message: "Student is not enrolled in that course."
            });
            return;
        }

        course.students.splice(index, 1);
        course.save();        

        callback(null);
    },

    async GetTeachersForCourse(
        call: grpc.ServerUnaryCall<GetTeachersForCourseReq, GetTeachersForCourseRes>,
        callback: grpc.sendUnaryData<GetTeachersForCourseRes>
    ) {
        const teacher = await ensureAdmin(call, callback);
        if (!teacher) return;

        const { courseId } = call.request;
        const manager = getManager();
        const course = await manager.findOne(Course, {
            where: { id: courseId },
            relations: ["teachers", "teachers.account", "teachers.courses"]
        });

        if (!course) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Requested course not found."
            });
            return;
        }

        const result = course.teachers.map(t => {
            return t.account === undefined ?
            {
                id: t.id,
                firstName: t.firstName,
                lastName: t.lastName,
                courses: t.courses
            } :
            {
                id: t.id,
                firstName: t.firstName,
                lastName: t.lastName,
                courses: t.courses,
                accountId: t.account.id,
                email: t.account.email
            }
        });
        
        callback(null, { teachers: result });
    },

    async AddTeacherToCourse(
        call: grpc.ServerUnaryCall<TeacherForCourseReq, TeacherForCourseRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        const callingTeacher = await ensureAdmin(call, callback);
        if (!callingTeacher) return;

        const manager = getManager();

        const { courseId, teacherId } = call.request;
        const course = await manager.findOne(Course, {
            where: { id: courseId },
            relations: ["teachers"]
        });
        const teacher = await manager.findOne(Teacher, {
            where: { id: teacherId }
        });

        if (!course || !teacher) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Invalid teacher or course specified."
            });
            return;
        }

        if (course.teachers.find(t => t.id === teacher.id)) {
            callback({
                code: grpc.status.INTERNAL,
                message: "Teacher is already teaching in that course."
            });
            return;
        }

        course.teachers.push(teacher);
        course.save();

        callback(null);
    },

    async RemoveTeacherFromCourse(
        call: grpc.ServerUnaryCall<TeacherForCourseReq, TeacherForCourseRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        const teacher = await ensureTeacher(call, callback);
        if (!teacher) return;
        
        const manager = getManager();

        const { courseId, teacherId } = call.request;
        const course = await manager.findOne(Course, {
            where: { id: courseId },
            relations: ["teachers"]
        });

        if (!course) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Invalid course specified."
            });
            return;
        }

        const index = course.teachers.findIndex(t => t.id === teacherId);
        if (index === -1) {
            callback({
                code: grpc.status.INTERNAL,
                message: "Teachers is not teaching that course."
            });
            return;
        }

        course.teachers.splice(index, 1);
        course.save();

        callback(null);
    },

    async CreateCourse(
        call: grpc.ServerUnaryCall<CreateCourseReq, RpcCourse>,
        callback: grpc.sendUnaryData<CreateCourseReq>
    ) {
        const teacher = await ensureAdmin(call, callback);
        if (!teacher) return;

        const { name } = call.request;
        const manager = getManager();

        const course = manager.create(Course);
        course.name = name;
        await course.save();
        
        callback(null, course);
    },

    async RenameCourse(
        call: grpc.ServerUnaryCall<RenameCourseReq, RpcCourse>,
        callback: grpc.sendUnaryData<RpcCourse>
    ) {
        const teacher = await ensureAdmin(call, callback);
        if (!teacher) return;
        
        const { courseId, name } = call.request;
        const manager = getManager();

        const course = await manager.findOne(Course, {
            where: { id: courseId }
        });
        if (!course) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Invalid course specified."
            });
            return;
        }

        course.name = name;
        course.save();

        callback(null, course);
    },

    async DeleteCourse(
        call: grpc.ServerUnaryCall<DeleteCourseReq, DeleteCourseRes>,
        callback: grpc.sendUnaryData<Empty>
    ) {
        const teacher = await ensureAdmin(call, callback);
        if (!teacher) return;
        
        const { courseId } = call.request;
        const manager = getManager();

        const course = await manager.findOne(Course, {
            where: { id: courseId }
        });
        if (!course) {
            callback({
                code: grpc.status.NOT_FOUND,
                message: "Invalid course specified."
            });
            return;
        }

        await course.softRemove();

        callback(null);
    }
}

const packageDef = protoLoader.loadSync(
    __dirname + "/../../proto/courseService.proto"
);
export const courseServiceProto = (grpc.loadPackageDefinition(
    packageDef) as unknown) as CourseServiceType;