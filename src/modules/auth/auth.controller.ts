import { Controller, Get, Post, Body, Request} from "@nestjs/common";

import { AuthService } from "./auth.service";

import { RegisterDTO } from "./dto/RegisterDTO.dto";
import { LoginDTO } from "./dto/LoginDTO.dto";

import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { UseGuards } from '@nestjs/common';
import { JwtRefreshGuard } from "src/common/guards/jwt-refresh.guard";

@Controller('auth')
@UseGuards(ThrottlerGuard)
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Get('test')
    async test() {
        return this.authService.test();
    }

    @Throttle({ default: { limit: 2, ttl: 10000 } })
    @Post('register')
    async register(@Body() dto: RegisterDTO) {
        return this.authService.register(dto);
    }

    @Throttle({ default: { limit: 10, ttl: 60000 } })
    @Post('login')
    async login(@Body() dto: LoginDTO) {
        return this.authService.login(dto);
    }

    @UseGuards(JwtRefreshGuard)
    @Post('refresh')
    async refresh(@Request() req) {
        return this.authService.refresh(req.user);
    }

}
    