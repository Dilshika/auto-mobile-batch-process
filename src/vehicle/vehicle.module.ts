/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { VehicleService } from './service/vehicle.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([Vehicle])
    ],
    providers:[VehicleService],
    exports:[VehicleService]
})
export class VehicleModule {}
