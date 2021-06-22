/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { FileReadService } from '../producer/file-read.producer';

@Controller('file-read')
export class FileReadController {

    constructor(private producerService:FileReadService){}

    @Get()
    async readFile(){
        this.producerService.readFile();
    }

}
