import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigService } from '@nestjs/config';
import { DatabaseService } from './database.service';

import { EnvEnum } from '../../common/enums/EnvEnums';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(EnvEnum.MONGO_URI),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}

