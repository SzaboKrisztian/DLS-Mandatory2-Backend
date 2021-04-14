import {
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    ManyToOne
} from "typeorm";
import { Student, RollCall } from "./";

@Entity()
export class Presence extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => RollCall, rollCall => rollCall.presences)
    rollCall: RollCall;

    @ManyToOne(() => Student, student => student.presences)
    student: Student;

    @CreateDateColumn()
    createdAt: Date;
}