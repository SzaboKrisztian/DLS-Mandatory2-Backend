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
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToOne(() => Account)
    @JoinColumn()
    account: Account;

    @ManyToMany(() => Course, (course) => course.students, { nullable: true })
    courses: Course[];
}
