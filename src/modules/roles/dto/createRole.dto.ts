import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateRoleDTO {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

}