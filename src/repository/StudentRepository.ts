import { EntityRepository, AbstractRepository, getCustomRepository } from "typeorm";
import { AccountRepository } from "./"
import { Student } from "../entity"

@EntityRepository()
export class StudentRepository extends AbstractRepository<Student> {
    
    async create(firstName: string, lastName: string, email: string, password: string) {
        console.log("in student repo")
        const accRepo = getCustomRepository(AccountRepository);

        const account = await accRepo.create(email, password);
        console.log("account created")
        const student = new Student();
        student.firstName = firstName;
        student.lastName = lastName;
        student.account = account;
        await student.save();
        console.log("student created")

        return student;
    }

}