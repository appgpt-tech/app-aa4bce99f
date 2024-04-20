//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Emergencies')
export class EmergenciesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  typeOfEmergency: string;

  @Column('text', { nullable: true })
  location: string;

  @Column('text', { nullable: true })
  ETA: string;

  @Column('date', { nullable: true })
  time: Date;

  @Column('integer', { nullable: true })
  userName: number;

  @Column('integer', { nullable: true })
  surname: number;

  @Column('text', { nullable: true })
  mobileNumber: string;
}
