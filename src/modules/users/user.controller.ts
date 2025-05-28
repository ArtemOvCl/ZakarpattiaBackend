import { Controller, Post, Body, Get } from '@nestjs/common';

import { UserService } from './user.service';

import { CreateUserDTO } from './dto/CreateUserDTO';
import { UserResponseDTO } from './dto/UserResponseDTO';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO): Promise<UserResponseDTO> {
    
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers(): Promise<UserResponseDTO[]> {
    return this.userService.getAllUsers();
  }
}

