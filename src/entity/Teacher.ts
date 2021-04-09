import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    JoinColumn,
    ManyToMany,
} from "typeorm";
import { Account } from "./Account";
import { Course } from "./Course";

@Entity()
export class Teacher extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    admin: boolean;

    @OneToOne(() => Account)
    @JoinColumn()
    account: Account;

    @ManyToMany(() => Course, (course) => course.teachers, { nullable: true })
    courses: Course[];
}
