import { CrudController } from "@nestjsx/crud";
import { Appointment } from './appointment.entity';
import { AppointmentsService } from './appointments.service';
export declare class AppointmentsController implements CrudController<Appointment> {
    service: AppointmentsService;
    constructor(service: AppointmentsService);
}
