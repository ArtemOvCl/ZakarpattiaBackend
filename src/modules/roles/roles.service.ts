import { Injectable, NotFoundException } from "@nestjs/common";
import { RolesRepository } from "./roles.repository";

import { RolesResponseDto } from "./dto/rolesResponse.dto";
import { CreateRoleDTO } from "./dto/createRole.dto";

import { Role } from "src/common/enums/RolesEnum";

@Injectable()
export class RolesService {
    constructor(private readonly rolesRepository: RolesRepository) {}

    async findAll(): Promise<RolesResponseDto[]> {
        const roles = await this.rolesRepository.findAll();
        return roles.map((role) => new RolesResponseDto(role));
    }

    async findByName(name: Role): Promise<RolesResponseDto | null> {
        const role = await this.rolesRepository.findByName(name);

        if (!role) throw new NotFoundException("Role not found");

        return new RolesResponseDto(role);
    }

    async create(role: CreateRoleDTO): Promise<RolesResponseDto> {
        const createdRole = await this.rolesRepository.create(role);
        return new RolesResponseDto(createdRole);
    }
}
