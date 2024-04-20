//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('text', { nullable: true })
  surname: string;

  @Column('text', { nullable: true })
  phoneNumber: string;

  @Column('text', { nullable: true })
  alternativeNumber: string;

  @Column('text', { nullable: true })
  address: string;

  @Column('integer', { nullable: true })
  age: number;

  @Column('text', { nullable: true })
  sex: string;
}
