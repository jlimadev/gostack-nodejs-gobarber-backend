import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import UserEntity from '@modules/users/infra/typeorm/entities/UserEntity';
import { classToClass } from 'class-transformer';

@Entity('appointments')
class AppointmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'provider_id' })
  provider: UserEntity;

  @Column()
  user_id: string;

  @ManyToOne(() => classToClass(UserEntity))
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column('time with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default AppointmentEntity;
