/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Vehicle{

    @PrimaryColumn()
    id:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column()
    email:string

    @Column()
    carMake:string

    @Column()
    carModel:string

    @Column()
    vinNumber:string

    @Column()
    manufacturedDate:string

    @Column()
    ageOfVehicle:number
}