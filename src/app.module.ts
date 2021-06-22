/* eslint-disable prettier/prettier */
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { FileReadModule } from './file-read/file-read.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BullModule.forRoot({
    redis:{
      host:'localhost',
      port:6379,
      },
  }), UploadModule, FileReadModule, VehicleModule,
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'post#21',
    database:'vehicles',
    entities:["dist/**/*.entity{.ts,.js}"]

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
