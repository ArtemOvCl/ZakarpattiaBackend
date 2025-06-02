import { Injectable } from "@nestjs/common";
import { RolesRepository } from "./roles.repository";

import { RolesResponseDto } from "./dto/rolesResponse.dto";

@Injectable()
export class RolesService {
    constructor(private readonly rolesRepository: RolesRepository) {}

    async findAll(): Promise<RolesResponseDto[]> {
        const roles = await this.rolesRepository.findAll();
        return roles.map((role) => new RolesResponseDto(role));
    }
}
