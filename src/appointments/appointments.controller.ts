import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import { Appointment } from './appointment.entity';
import { AppointmentsService } from './appointments.service';

@Crud({
  model: {
    type: Appointment
  }
})

@Controller('appointments')
export class AppointmentsController implements CrudController<Appointment>{
  constructor(public service: AppointmentsService) {}
}
