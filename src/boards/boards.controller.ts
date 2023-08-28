import { Controller, Get, Render } from '@nestjs/common';

@Controller('boards')
export class BoardsController {

    @Get("/g")
    @Render("boards/g")
    getG(){}

    @Get("/a")
    @Render("boards/a")
    getAnime(){}

    @Get("/th")
    @Render("boards/th")
    getTech(){}
    
    @Get("/g")
    @Render("boards/g")
    getG(){}

    @Get("/g")
    @Render("boards/g")
    getG(){}

    @Get("/g")
    @Render("boards/g")
    getG(){}

}
