import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';

@Injectable()
export class AppointmentsService extends TypeOrmCrudService<Appointment>{
  constructor(@InjectRepository(Appointment) repo) {
    super(repo)
  }
}
