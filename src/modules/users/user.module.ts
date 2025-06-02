import { Module } from '@nestjs/common';

import { UserController } from './user.controller';

import { UserService } from './user.service';

import { UserRepository } from './user.repository';

import { User, UserSchema } from './user.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from '../roles/roles.module';

import { RoleClassifier, RoleClassifierSchema } from '../roles/roles.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: RoleClassifier.name, schema: RoleClassifierSchema }]), 
    RolesModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
