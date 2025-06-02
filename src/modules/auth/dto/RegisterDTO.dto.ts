import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDTO {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}   