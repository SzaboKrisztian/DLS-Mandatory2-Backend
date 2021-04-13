import {
    Entity,
    Column,
    PrimaryColumn,
    BaseEntity,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { Account } from './';

@Entity()
export class AccessToken extends BaseEntity {
    @PrimaryColumn()
    token: string;

    @ManyToOne(() => Account)
    account: Account;

    @Column({ default: true })
    valid: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
