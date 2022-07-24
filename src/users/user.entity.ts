import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove, AfterUpdate } from 'typeorm'
// import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string

  @Column()
  firstName: string

  @Column()
  lastName: string
  
  @Column()
  phone: string

  @AfterInsert()
  logInsert() {
    console.log('Inserted user with id:', this.id)
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated user with id:', this.id)
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed user with id:', this.id)
  }
}