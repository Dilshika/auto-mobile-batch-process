/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Vehicle } from "../entities/vehicle.entity";
import { VehicleDto } from "../model/vehicle.model";

@Injectable()
export class VehicleService{
    constructor(@InjectRepository(Vehicle) private vehicleRepository:Repository<Vehicle>){}

    async saveVehicle(data:VehicleDto):Promise<Vehicle|unknown>{
        return await this.vehicleRepository.save(data)
        .catch(
            (err)=>{
            console.log(err);
        });
    }
}