import { Controller, Get, Inject, Param, HttpStatus, Res } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";

import { lastValueFrom } from "rxjs";

@Controller('/contacts')
export class SearchContactController {
    constructor(
        @Inject("USERS_TRANSPORT") private readonly client: ClientProxy,
    ){}

    @Get('/search-user')
    public async SearchContact(@Param() uuid_contact: string, @Res() res: Response) {
        const result = lastValueFrom(this.client.send('search-user', uuid_contact));
        res.status(HttpStatus.OK).json({ data: result})
    }
}