import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getEnvFilePath } from './envConfig.util';

import { jwtConfig } from 'src/config/envConfig/jwtConfig/jwt.config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: getEnvFilePath(),
    load: [jwtConfig],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class EnvConfigModule {}
