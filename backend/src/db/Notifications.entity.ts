//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Notifications')
export class NotificationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  notificationType: string;

  @Column('text', { nullable: true })
  messageContent: string;

  @Column('date', { nullable: true })
  timeSent: Date;

  @Column('integer', { nullable: true })
  associatedWith: number;
}