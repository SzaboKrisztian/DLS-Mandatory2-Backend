import * as bcrypt from "bcrypt-nodejs-as-promised";
export const SALT_ROUNDS = 10;

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
            password: await bcrypt.hash(password, SALT_ROUNDS)
        });
        return account.save();
    }

    async findByEmail(email: string) {
        return this.manager.findOne(Account, null, {
            where: { email }
        });
    }

    async changePassword(accountId: number, newPassword: string) {
        const account = await this.manager.findOne(Account, {
            where: { id: accountId }
        });
        if (!account) {
            throw new Error("Account not found.");
        }
        account.password = await bcrypt.hash(newPassword, SALT_ROUNDS);
        await account.save();
    }

}