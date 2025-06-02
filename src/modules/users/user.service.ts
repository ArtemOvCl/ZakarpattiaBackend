import { Injectable, NotFoundException } from "@nestjs/common";

import { UserRepository } from "./user.repository";

import { CreateUserDTO } from "./dto/CreateUserDTO";
import { UserResponseDTO } from "./dto/UserResponseDTO";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDTO): Promise<UserResponseDTO> {
    const user = await this.userRepository.create(createUserDto);
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
}
