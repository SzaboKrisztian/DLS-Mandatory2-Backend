import {
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    ManyToOne,
    Column
} from "typeorm";
import { Student, RollCall, Teacher } from "./";

@Entity()
export class Presence extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => RollCall, rollCall => rollCall.presences)
    rollCall: RollCall;

    @ManyToOne(() => Student, student => student.presences)
    student: Student;

    @Column()
    markedBy: Teacher;

    @CreateDateColumn()
    createdAt: Date;
}