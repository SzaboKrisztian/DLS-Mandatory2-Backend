import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    JoinColumn,
    ManyToMany,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { Account, Course } from "./";

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
