import "reflect-metadata";
import { createConnection } from "typeorm";
import { Student } from "./entity/Student";

createConnection()
    .then(async (db) => {
        console.log("Inserting a new user into the database...");
        const user = new Student();
        user.firstName = "Timber";
        user.lastName = "Saw";
        await db.manager.save(user);
        console.log("Saved a new user with id: " + user.id);

        console.log("Loading users from the database...");
        const users = await db.manager.find(Student);
        console.log("Loaded users: ", users);

        console.log("Test:", JSON.stringify(await Student.findOne()));

        console.log(
            "Here you can setup and run express/koa/any other framework."
        );
    })
    .catch((err) => console.error(err));
