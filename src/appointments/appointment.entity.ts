import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove, AfterUpdate } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
// import { Exclude } from 'class-transformer';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  createdBy: string

  @ApiProperty()
  @Column()
  eventDate: string
  
  @ApiProperty()
  @Column({default: 'low'})
  type: string
  
  @ApiProperty()
  @Column()
  description: string

  @AfterInsert()
  logInsert() {
    console.log('Inserted record with id:', this.id)
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated record with id:', this.id)
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed record with id:', this.id)
  }
}