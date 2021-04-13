import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    CreateDateColumn
}
from 'typeorm';
import { RollCall } from './';

@Entity() export class Code extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @ManyToOne(() => RollCall)
    rollCall: RollCall;

    @CreateDateColumn()
    createdAt: Date;
}
