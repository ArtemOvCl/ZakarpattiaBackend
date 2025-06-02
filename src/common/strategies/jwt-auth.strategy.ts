import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/modules/users/user.service';

import { Payload } from 'src/modules/auth/interfaces/Auth.types';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private readonly userService: UserService, private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT.accessSecret')!,
        });
    }

    async validate(payload: Payload) {
        const user = await this.userService.getUserById(payload.sub);

        if (!user || !user.isVerified) {
            throw new UnauthorizedException('User not found');
        }

        return payload;
    }
    
}
