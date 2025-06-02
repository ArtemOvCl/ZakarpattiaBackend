import { BadRequestException, Injectable } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UserService } from "../users/user.service";

import { JwtConfig } from "src/config/envConfig/jwtConfig/jwt.config";

import { EnvEnum } from "src/common/enums/EnvEnums";

import { RegisterDTO } from "./dto/RegisterDTO.dto";


@Injectable()
export class AuthService {

    private readonly JWT_CONFIG: JwtConfig;

    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly userService: UserService,
    ) {
        this.JWT_CONFIG = this.configService.get<JwtConfig>(EnvEnum.JWT)!;
    }

    async test() {
        console.log(this.JWT_CONFIG);
    }

    async register(registerDto: RegisterDTO) {
        const user = await this.userService.createUser(registerDto);

        if (!user) throw new BadRequestException('User not created');


        return user;
    }
}
    