import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('appointments')
class AppointmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('time with time zone')
  date: Date;
}

export default AppointmentEntity;
