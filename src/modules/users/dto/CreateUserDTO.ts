import { IsString, IsNotEmpty} from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

import { RegisterDTO } from 'src/modules/auth/dto/RegisterDTO.dto';

export class CreateUserDTO extends RegisterDTO {}