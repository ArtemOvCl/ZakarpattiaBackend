import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";

import { RoleClassifier, RoleClassifierSchema } from "./roles.schema";

import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";

import { RolesRepository } from "./roles.repository";

@Module({
    imports: [MongooseModule.forFeature([{ name: RoleClassifier.name, schema: RoleClassifierSchema }])],
    controllers: [RolesController],
    providers: [RolesService, RolesRepository],
    exports: [RolesService],
})
export class RolesModule {}