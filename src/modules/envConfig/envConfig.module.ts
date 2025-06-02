import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getEnvFilePath } from './envConfig.util';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: getEnvFilePath(),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class EnvConfigModule {}
