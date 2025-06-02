import { BadRequestException, Injectable } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UserService } from "../users/user.service";

import { JwtConfig } from "src/config/envConfig/jwtConfig/jwt.config";

import { EnvEnum } from "src/common/enums/EnvEnums";

import { RegisterDTO } from "./dto/RegisterDTO.dto";
import { LoginDTO } from "./dto/LoginDTO.dto";

import * as bcrypt from "bcrypt";
import { UserResponseDTO } from "../users/dto/UserResponseDTO";

import { Payload, Tokens } from "./interfaces/Auth.types";
import { LoginResponse } from "./dto/LoginResponseDTO.dto";

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

        

        return user;
    }

    async login(loginDto: LoginDTO) {
        const user = await this.validateUser(loginDto);
        const { hashedPassword, ...userData } = user;
      
        const response: LoginResponse = { user: userData, isVerified: user.isVerified };
      
        if (user.isVerified) {
          response.tokens = await this.generateToken(userData);
        }
      
        return response;
      }      

    private async validateUser(loginDto: LoginDTO) {
        const user = await this.userService.getUserByEmail(loginDto.email);
      
        const isValid = user && await bcrypt.compare(loginDto.password, user.hashedPassword);
      
        if (!isValid) throw new BadRequestException('Неправильні дані для входу');
      
        return user;
      }

      private async generateToken(user: UserResponseDTO) : Promise<Tokens> {
        const payload : Payload = { sub: user._id, role: user.role};

        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.sign(payload, {
                secret: this.JWT_CONFIG.accessSecret,
                expiresIn: this.JWT_CONFIG.accessDuration
            }),
            
            this.jwtService.sign(payload, {
                secret: this.JWT_CONFIG.refreshSecret,
                expiresIn: this.JWT_CONFIG.refreshDuration
            })
        ]);

        const tokens : Tokens = {
            accessToken,
            refreshToken
        };

        return tokens;
      }
      
}
    