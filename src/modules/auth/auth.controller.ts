import { Controller, Get, Post, Body } from "@nestjs/common";

import { AuthService } from "./auth.service";

import { RegisterDTO } from "./dto/RegisterDTO.dto";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Get('test')
    async test() {
        return this.authService.test();
    }

    @Post('register')
    async register(@Body() dto: RegisterDTO) {
        return this.authService.register(dto);
    }
}
    