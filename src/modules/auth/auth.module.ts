import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvEnum } from 'src/common/enums/EnvEnums';

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>(EnvEnum.JWT_ACCESS_SECRET),
                signOptions: { expiresIn: configService.get<string>(EnvEnum.JWT_ACCESS_DURATION) },
            }),
            inject: [ConfigService],
        }),
        ConfigModule,
    ],
    providers: [JwtStrategy],
    exports: [JwtModule, JwtStrategy],
})
export class AuthModule {}
