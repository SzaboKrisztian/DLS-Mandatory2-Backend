import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { RollCall } from './RollCall';

@Entity()
export class Code extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @ManyToOne(() => RollCall)
    rollCall: RollCall;
}
