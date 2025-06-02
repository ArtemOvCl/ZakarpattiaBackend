import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";

import { RolesService } from "./roles.service";

import { RolesResponseDto } from "./dto/rolesResponse.dto";
import { CreateRoleDTO } from "./dto/createRole.dto";

import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { RolesGuard } from "src/common/guards/roles.guard";

import { Roles } from "src/common/decorators/roles.decorator";

import { ROLES } from "src/common/enums/RolesEnum";

@Controller('roles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Roles(ROLES.ADMIN)
    @Get()
    async findAll(): Promise<RolesResponseDto[]> {
        const roles = await this.rolesService.findAll();
        return roles;
    }

    @Roles(ROLES.ADMIN)
    @Post()
    async create(@Body() role: CreateRoleDTO): Promise<RolesResponseDto> {
        const createdRole = await this.rolesService.create(role);
        return createdRole;
    }
}   