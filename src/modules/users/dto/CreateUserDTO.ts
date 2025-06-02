import { IsString, IsNotEmpty} from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { UserResponseDTO } from './UserResponseDTO';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO extends OmitType(UserResponseDTO, ['_id', 'createdAt']) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}

