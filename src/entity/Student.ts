import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    JoinColumn,
    ManyToMany,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany
} from "typeorm";
import { Account, Course, Presence } from "./";

@Entity()
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToOne(() => Account, { cascade: true })
    @JoinColumn()
    account: Account;

    @ManyToMany(() => Course, (course) => course.students, { nullable: true })
    courses: Course[];

    @OneToMany(() => Presence, (presence) => presence.rollCall, { nullable: true })
    presences: Presence[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
