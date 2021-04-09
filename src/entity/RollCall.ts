import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { Code } from "./Code";
import { Course } from "./Course";

@Entity()
export class RollCall extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    periodStart: Date;

    @Column()
    periodEnd: Date;

    @OneToMany(() => Course, (course) => course.rollCalls)
    course: Course;

    @ManyToOne(() => Code, (code) => code.rollCall)
    codes: Code[];
}
