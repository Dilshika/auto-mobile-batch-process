/* eslint-disable prettier/prettier */
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { VehicleModule } from 'src/vehicle/vehicle.module';
import { FileReadConsumer } from './consumer/file-read.consumer';
import { FileReadController } from './controller/file-read.controller';
import { FileReadService } from './producer/file-read.producer';

@Module({
  imports:[
    BullModule.registerQueue({
      name:'file-read'
    }),
    VehicleModule
  ],
  controllers: [FileReadController],
  providers:[FileReadService,FileReadConsumer]
})
export class FileReadModule {}
