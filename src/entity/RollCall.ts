import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { Code, Course, Presence } from "./";

@Entity()
export class RollCall extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    periodStart: Date;

    @Column()
    periodEnd: Date;

    @Column({ nullable: true, default: null })
    timeStopped: Date;

    @OneToMany(() => Course, (course) => course.rollCalls)
    course: Course;

    @ManyToOne(() => Code, (code) => code.rollCall, { nullable: true })
    codes: Code[];

    @ManyToOne(() => Presence, (presence) => presence.rollCall, { nullable: true })
    presences: Presence[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
