import { Injectable, NotFoundException } from "@nestjs/common";
import * as bcrypt from "bcrypt";

import { UserRepository } from "./user.repository";

import { RolesService } from "../roles/roles.service";

import { UserResponseDTO } from "./dto/UserResponseDTO";
import { RegisterDTO } from "src/modules/auth/dto/RegisterDTO.dto";

import { ROLES } from "src/common/enums/RolesEnum";

import { IUser } from "./interfaces/IUser.interface";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository, private readonly roleService: RolesService) {}

  async createUser(registerDto: RegisterDTO): Promise<UserResponseDTO> {

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const role = await this.roleService.findByName(ROLES.USER);

    if (!role) throw new NotFoundException("Role not found");

    const userToCreate: IUser = {
      fullName: registerDto.name,
      email: registerDto.email,
      hashedPassword,
      roleId: role._id
    };

    const user = await this.userRepository.create(userToCreate);

    return new UserResponseDTO(user);
  }

  async getAllUsers(): Promise<UserResponseDTO[]> {
    const users = await this.userRepository.getAllUsers();
    return users.map(user => new UserResponseDTO(user));
  }

  async getUserById(id: string): Promise<UserResponseDTO> {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return new UserResponseDTO(user);
  }

  async getUserByEmail(email: string): Promise<UserResponseDTO> {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return new UserResponseDTO(user);
  }
}
