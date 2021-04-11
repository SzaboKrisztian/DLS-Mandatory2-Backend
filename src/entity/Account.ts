import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, Unique } from "typeorm";
import { AccessToken } from "./AccessToken";

@Entity()
@Unique(["email"])
export class Account extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => AccessToken, (token) => token.account)
    tokens: AccessToken[];
}
