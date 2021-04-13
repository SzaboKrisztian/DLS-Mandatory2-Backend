import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    BaseEntity,
    JoinTable,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { RollCall, Student, Teacher } from "./";

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
