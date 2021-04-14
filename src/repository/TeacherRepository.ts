import { EntityRepository, AbstractRepository, getCustomRepository } from "typeorm";
import { AccountRepository } from "./"
import { Teacher } from "../entity"

@EntityRepository()
export class TeacherRepository extends AbstractRepository<Teacher> {
    
    async create(firstName: string, lastName: string, email: string, password: string, admin?: boolean) {
        const accRepo = getCustomRepository(AccountRepository);

        const teacher = new Teacher();
        teacher.firstName = firstName;
        teacher.lastName = lastName;
        teacher.admin = admin;
        teacher.account = await accRepo.create(email, password);
        await teacher.save();

        return teacher;
    }

}