import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin')
export class AdminController {

    @Get("/admin/login")
    @Render("admin/login")
    getAdminLogin(){}

}
