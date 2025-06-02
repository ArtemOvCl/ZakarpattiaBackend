import { Controller, Post, Body, Get } from '@nestjs/common';

import { UserService } from './user.service';

import { UserResponseDTO } from './dto/UserResponseDTO';
import { RegisterDTO } from 'src/modules/auth/dto/RegisterDTO.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserResponseDTO[]> {
    return this.userService.getAllUsers();
  }
}

