import { Controller, Get, Post, Body } from "@nestjs/common";

import { RolesService } from "./roles.service";

import { RolesResponseDto } from "./dto/rolesResponse.dto";
import { CreateRoleDTO } from "./dto/createRole.dto";

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Get()
    async findAll(): Promise<RolesResponseDto[]> {
        const roles = await this.rolesService.findAll();
        return roles;
    }

    @Post()
    async create(@Body() role: CreateRoleDTO): Promise<RolesResponseDto> {
        const createdRole = await this.rolesService.create(role);
        return createdRole;
    }
}   