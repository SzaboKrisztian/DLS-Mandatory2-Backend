import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
    Unique,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { AccessToken } from "./";

@Entity()
@Unique(["email"])
export class Account extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => AccessToken, (token) => token.account, { nullable: true })
    tokens: AccessToken[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
