import { createConnection } from "typeorm";
import * as faker from "faker";
import * as dateFns from "date-fns";
import { randInt } from "./";
import { Course, Presence, RollCall } from "../entity";

if (process.argv.length < 4) {
    throw new Error("Not enough arguments supplied");
}

const today = getDate(new Date());
const courseId = Number(process.argv[2]);
const startDate = getDate(new Date(process.argv[3]));
const endDate = process.argv.length >= 5 ? getDate(new Date(process.argv[4])) : today;

if (Number.isNaN(courseId) || dateFns.isBefore(endDate, startDate)) {
    throw new Error("Invalid input");
}

const SEGMENT_DURATION = 90; // minutes
const PRESENCE_PROB = 0.7;

function getDate(datetime: Date) {
    return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate());
}

function generateSchedule() {
    const segments = randInt(2, 5);
    
    const days: number[] = [];
    for (let i = 0; i < segments; i += 1) {
        days.push(randInt(1, 6));
    }
    days.sort();

    const result = [];
    for (let day of days) {
        if (result.findIndex(el => el.day === day) !== -1) {
            continue;
        }

        const numSegments = days.filter(d => d === day).length;
        const dayLength = numSegments * SEGMENT_DURATION + (numSegments - 1) * 15; // segments + breaks inbetween

        const minStart = 480; // 8 AM in minutes
        const maxStart = 1080 - dayLength; // 6 PM latest end time
        const start = Math.floor(randInt(minStart, maxStart) / 15) * 15; // rounded to the nearest :15 minutes

        result.push({
            day,
            start,
            end: start + dayLength
        });
    }

    return result;
}

async function addPresences(

) {
    const db = await createConnection();

    const course = await db.manager.findOne(Course, courseId, {
        relations: ["students", "teachers"]
    });
    if (!course) {
        throw new Error("Invalid course id specified");
    }
    if (course.students.length === 0 || course.teachers.length === 0) {
        throw new Error("Course must have both students and teachers associated.");
    }

    if (dateFns.isAfter(startDate, today) || dateFns.isAfter(endDate, today)) {
        throw new Error("Both start and end dates should be in the past");
    }

    const schedule = generateSchedule();
    let date = startDate;
    while (dateFns.isBefore(date, endDate)) {
        const daySchedule = schedule.find(el => el.day === date.getDay());
        if (daySchedule !== undefined) {
            const rollCall = new RollCall();
            const teacher = faker.random.arrayElement(course.teachers);
            rollCall.course = course;
            rollCall.periodStart = dateFns.addMinutes(date, daySchedule.start);
            rollCall.periodEnd = dateFns.addMinutes(date, daySchedule.end);
            await rollCall.save();
            const promises: Promise<Presence>[] = [];
            course.students.forEach(student => {
                if (Math.random() < PRESENCE_PROB) {
                    const presence = new Presence();
                    presence.courseId = courseId;
                    presence.rollCall = rollCall;
                    presence.markedBy = teacher;
                    presence.student = student;
                    promises.push(presence.save());
                }
            });
            await Promise.all(promises);
        }

        date = dateFns.addDays(date, 1);
    }

}

if (require.main === module) {
    addPresences()
        .then(() => console.log("Successfully created presences."))
        .catch(err => console.error(err));
}