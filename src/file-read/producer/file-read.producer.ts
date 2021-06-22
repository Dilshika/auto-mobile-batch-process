/* eslint-disable prettier/prettier */
import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
export class FileReadService{
    constructor(@InjectQueue('file-read') private queue:Queue){
    }

    async readFile(){
        const filePath='E:/assignment/Rapid Assignment data.csv';
        await this.queue.add('read-job',{
            path:filePath
        },{delay:5000}
        )
    }
}