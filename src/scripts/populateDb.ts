import { createConnection } from "typeorm";
import { StudentRepository, TeacherRepository } from "../repository";
import * as faker from "faker";
import * as dateFns from "date-fns";
import { randInt } from "./";
import { Course, Student, Teacher } from "../entity";

const NUM_STUDENT_GROUPS = 3;
const MIN_NUM_STUDENTS_PER_GROUP = 20;
const MAX_NUM_STUDENTS_PER_GROUP = 45;
const MIN_NUM_COURSES_PER_GROUP = 3;
const MAX_NUM_COURSES_PER_GROUP = 6;

async function populateDb(

) {
    const db = await createConnection();
    const studentRepo = db.getCustomRepository(StudentRepository);
    const teacherRepo = db.getCustomRepository(TeacherRepository);

    async function getTeacher(allTeachers: Teacher[]) {
        // 1/3 chance of skipping choice, and creating a new teacher.
        // Removes a random teacher from the array, and returns it.
        // If array is empty, will create a new teacher as needed.
        // 15% chance for a teacher to be left in (or inserted into,
        // in the case of a new teacher) the original array, thus
        // creating a chance for them to be chosen again.
        if (allTeachers.length > 0 && Math.random() > 0.33) {
            const index = randInt(allTeachers.length);
            return Math.random() < 0.15
                ? allTeachers[index]
                : allTeachers.splice(index, 1)[0];
        } else {
            const teacher = await teacherRepo.create(
                faker.name.firstName(),
                faker.name.lastName(),
                faker.internet.email(),
                "1234");
            if (Math.random() < 0.15) {
                allTeachers.push(teacher);
            }
            return teacher;
        }
    }

    for (let sdtGrp = 0; sdtGrp < NUM_STUDENT_GROUPS; sdtGrp += 1) {

        const teachersForGroup = await db.manager.find(Teacher);

        const numStudents = randInt(MIN_NUM_STUDENTS_PER_GROUP,
            MAX_NUM_STUDENTS_PER_GROUP);
        const numCourses = randInt(MIN_NUM_COURSES_PER_GROUP,
            MAX_NUM_COURSES_PER_GROUP);

        const studentGroup: Student[] = [];
        for (let std = 0; std < numStudents; std += 1) {
            studentGroup.push(await studentRepo.create(
                faker.name.firstName(),
                faker.name.lastName(),
                faker.internet.email(),
                "1234"));
        }

        console.log(`Created ${studentGroup.length} students.`);

        for (let crs = 0; crs < numCourses; crs += 1) {
            const course = db.manager.create(Course);
            course.name = faker.random.words(randInt(1, 4));
            course.students = studentGroup;
            const teacher = await getTeacher(teachersForGroup);
            course.teachers = [teacher];
            // 20% chance for course to have two teachers
            if (Math.random() < 0.2) {
                // Avoid adding the same teacher twice
                const pick = await getTeacher(teachersForGroup);
                if (pick.id === course.teachers[0].id) {
                    course.teachers.push(await getTeacher(teachersForGroup));
                    teachersForGroup.push(pick);
                } else {
                    course.teachers.push(pick);
                }
            }
            await course.save();
        }

        console.log(` - added them to ${numCourses} courses.`);
    }
}

if (require.main === module) {
    populateDb()
        .then(() => console.log("Successfully created data."))
        .catch(err => console.log("Error creating data: ", err));
}