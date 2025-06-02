import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvEnum } from 'src/common/enums/EnvEnums';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';


@Module({
    imports: [
        PassportModule,
        JwtModule],
    controllers: [AuthController],
    providers: [JwtStrategy, AuthService],
})
export class AuthModule {}
