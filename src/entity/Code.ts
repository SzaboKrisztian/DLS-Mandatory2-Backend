import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    CreateDateColumn,
    Generated
}
from 'typeorm';
import { RollCall } from './';

@Entity() export class Code extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    code: string;

    @ManyToOne(() => RollCall, (rollCall) => rollCall.codes)
    rollCall: RollCall;

    @CreateDateColumn()
    createdAt: Date;
}
