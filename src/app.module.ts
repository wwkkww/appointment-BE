import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentsModule } from './appointments/appointments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      // entities: [User],
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AppointmentsModule,
    UsersModule
  ],
})
export class AppModule {}
