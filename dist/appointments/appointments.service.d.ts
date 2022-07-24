import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Appointment } from './appointment.entity';
export declare class AppointmentsService extends TypeOrmCrudService<Appointment> {
    constructor(repo: any);
}
