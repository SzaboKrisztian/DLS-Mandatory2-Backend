import { createConnection } from "typeorm";

import { StudentRepository, TeacherRepository } from "../repository"

const usageInfo = `Usage:
yarn run createUser <type> <firstName> <lastName> <email> <password> [admin]
  type: "student" | "teacher",
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  admin: boolean - optional. only taken into account if type is "teacher"
`;

if (process.argv.length < 7) {
    console.error("Too few arguments specified")
    console.info(usageInfo);
    process.exit(1);
}

const [
    _1,
    _2,
    type,
    firstName,
    lastName,
    email,
    password
] = process.argv;
const admin = process.argv.length === 8 && process.argv[7] === "true"

if (type !== "student" && type !== "teacher") {
    console.error("Invalid type specified")
    console.info(usageInfo);
    process.exit(1);
}

if (!firstName || !lastName || !email || !password) {
    console.error("Invalid or missing argument")
    console.info(usageInfo);
    process.exit(1);
}

async function createUser(
    type: "student" | "teacher",
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    admin?: boolean
) {
    const db = await createConnection();
    
    if (type === "student") {
        const repo = db.getCustomRepository(StudentRepository);
        await repo.create(firstName, lastName, email, password);
    } else {
        const repo = db.getCustomRepository(TeacherRepository);
        await repo.create(firstName, lastName, email, password, admin);
    }
    
}

createUser(type, firstName, lastName, email, password, admin)
    .then(() => console.log("User created"))
    .catch((err) => console.error(err));


