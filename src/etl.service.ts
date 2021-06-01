import { Injectable, HttpService } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { response } from 'express';
import { promises } from 'fs';

@Injectable()
export class EtlService {

    private urlapi = "https://hn.algolia.com/api/v1/search_by_date?query=nodejs";
    constructor(private httpService: HttpService) {}

    //@Cron(CronExpression.EVERY_HOUR)
    return new Promise((resolve) => {
            value.subscribe((result) => {
                // Aqui sacamos a flote la variable
                resolve(result.data.hits)
            }, error => {
                throw error;
            })
        })
  
}
