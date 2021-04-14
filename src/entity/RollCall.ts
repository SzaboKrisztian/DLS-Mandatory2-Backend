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
import { Course, Presence } from "./";

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

    @ManyToOne(() => Course, (course) => course.rollCalls)
    course: Course;

    @OneToMany(() => Presence, (presence) => presence.rollCall, { nullable: true })
    presences: Presence[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
