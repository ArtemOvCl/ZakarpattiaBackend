import { Module } from '@nestjs/common';

import { EnvConfigModule } from './config/envConfig/envConfig.module';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/roles/roles.module';


import { AppController } from './app.controller';

import { AppService } from './app.service';

@Module({
  imports: [EnvConfigModule, DatabaseModule, UserModule, AuthModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
