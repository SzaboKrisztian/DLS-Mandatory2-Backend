import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    BaseEntity,
    JoinTable,
    ManyToOne,
} from "typeorm";
import { RollCall } from "./RollCall";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

@Entity()
export class Course extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Teacher, (teacher) => teacher.courses, { nullable: true })
    @JoinTable()
    teachers: Teacher[];

    @ManyToMany(() => Student, (student) => student.courses, { nullable: true })
    @JoinTable()
    students: Student[];

    @ManyToOne(() => RollCall, { nullable: true })
    rollCalls: RollCall[];
}
