import { Injectable } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

import { JwtConfig } from "src/config/envConfig/jwtConfig/jwt.config";

import { EnvEnum } from "src/common/enums/EnvEnums";

@Injectable()
export class AuthService {

    private readonly JWT_CONFIG: JwtConfig;

    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {
        this.JWT_CONFIG = this.configService.get<JwtConfig>(EnvEnum.JWT)!;
    }

    async test() {
        console.log(this.JWT_CONFIG);
    }
}
    