import { Role } from "../roles.schema";
import { ApiProperty } from "@nestjs/swagger";

export class RolesResponseDto {
    @ApiProperty({ description: 'The ID of the role' })
    _id: string;

    @ApiProperty({ description: 'The name of the role' })
    roleName: string;

    constructor(role: Role) {
        this._id = role._id;
        this.roleName = role.name;
    }
}
