import * as bcrypt from "bcrypt";
const saltRounds = 10;

import { EntityRepository, AbstractRepository } from "typeorm";
import { Account } from "../entity/Account";

@EntityRepository(Account)
export class AccountRepository extends AbstractRepository<Account> {

    async create(email: string, password: string) {
        const exists = await this.manager.findOne(Account, null, { where: { email } });
        if (exists) {
            throw new Error("Email already in use");
        }
        if (!email.match(/.+@.+\..+/)) {
            throw new Error("Invalid email format");
        }
        const account = this.manager.create(Account, {
            email,
            password: await bcrypt.hash(password, saltRounds)
        });
        return account.save();
    }

    async findByEmail(email: string) {
        return this.manager.findOne(Account, null, {
            where: { email }
        });
    }

}