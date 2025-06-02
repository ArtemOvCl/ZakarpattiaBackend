import { Controller, Post, Body, Get, Delete, Patch, Param, UseGuards } from '@nestjs/common';

import { UserService } from './user.service';

import { UserResponseDTO } from './dto/UserResponseDTO';
import { RegisterDTO } from 'src/modules/auth/dto/RegisterDTO.dto';

import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';

import { Roles } from 'src/common/decorators/roles.decorator';

import { ROLES } from 'src/common/enums/RolesEnum';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(ROLES.ADMIN, ROLES.MODERATOR)
  @Get()
  async getAllUsers(): Promise<UserResponseDTO[]> {
    return this.userService.getAllUsers();
  }
  
  @Roles(ROLES.ADMIN, ROLES.MODERATOR)
  @Delete('unverified')
  async deleteUnverifiedUsers(): Promise<void> {
    return this.userService.deleteUnverifiedUsers();
  }

}

