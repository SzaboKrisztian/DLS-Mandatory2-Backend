import {
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    CreateDateColumn
} from "typeorm";
import { Student, RollCall } from "./";

@Entity()
export class Presence extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => RollCall, rollCall => rollCall.presences)
    rollCall: RollCall;

    @OneToMany(() => Student, student => student.presences)
    student: Student;

    @CreateDateColumn()
    createdAt: Date;
}