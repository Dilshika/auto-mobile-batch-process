/* eslint-disable prettier/prettier */
import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import * as fs from 'fs';
import * as csv from 'fast-csv';
import { VehicleService } from "../../vehicle/service/vehicle.service";
import { Inject } from "@nestjs/common";

@Processor('file-read')
export class FileReadConsumer{

    constructor(private vehicleService:VehicleService){}

    @Process('read-job')
    async readJob(job:Job<any>){
        const value=job.data;
        //console.log(job.data.path)

        try {
            fs.createReadStream(value.path)
            .pipe(csv.parse({}))
            .on('data',(data)=>{
    
                const thisYear=new Date();
                const manufacturedYear=new Date(data[7]).getFullYear();
    
                const age:number=thisYear.getFullYear()-manufacturedYear;
    
                //save to db
                this.vehicleService.saveVehicle({
                    id:data[0],
                    firstName:data[1],
                    lastName:data[2],
                    email:data[3],
                    carMake:data[4],
                    carModel:data[5],
                    vinNumber:data[6],
                    manufacturedDate:data[7],
                    ageOfVehicle:age
    
                });
                
            }).on('end',()=>{
                console.log('Finished');
            }) 
        } catch (error) {
            console.log(error)
        }
        
    }
}