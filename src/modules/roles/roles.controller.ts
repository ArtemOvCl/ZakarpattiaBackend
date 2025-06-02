import { Controller, Get } from "@nestjs/common";

import { RolesService } from "./roles.service";

import { RolesResponseDto } from "./dto/rolesResponse.dto";

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Get()
    async findAll(): Promise<RolesResponseDto[]> {
        const roles = await this.rolesService.findAll();
        return roles;
    }
}   