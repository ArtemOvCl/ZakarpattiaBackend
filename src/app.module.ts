import { Module } from '@nestjs/common';

import { EnvConfigModule } from './config/envConfig/envConfig.module';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/roles/roles.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
    
import { AppController } from './app.controller';

import { AppService } from './app.service';

import { ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

import { JwtAuthStrategy } from './common/strategies/jwt-auth.strategy';
import { JwtRefreshStrategy } from './common/strategies/jwt-refresh.strategy';

@Module({
  imports: [EnvConfigModule, 
            DatabaseModule, 
            UserModule, 
            AuthModule, 
            RolesModule, 
            ThrottlerModule.forRoot([{ ttl: 60, limit: 2 }]),
            JwtModule.register({}),
            PassportModule
          ],
  controllers: [AppController],
  providers: [AppService, JwtAuthStrategy, JwtRefreshStrategy],
})

export class AppModule {}
