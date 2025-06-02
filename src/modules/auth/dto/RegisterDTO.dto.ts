import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDTO {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;

}   