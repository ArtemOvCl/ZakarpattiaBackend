import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { RoleClassifier } from "./roles.schema";
import { Role } from "src/common/enums/RolesEnum";

import { CreateRoleDTO } from "./dto/createRole.dto";
@Injectable()
export class RolesRepository {
    constructor(
        @InjectModel(RoleClassifier.name) private roleModel: Model<RoleClassifier>,
    ) {}

    async findAll(): Promise<RoleClassifier[]> {
        return this.roleModel.find();
    }

    async findByName(name: Role): Promise<RoleClassifier | null> {
        return this.roleModel.findOne({ name });
    }

    async create(role: CreateRoleDTO): Promise<RoleClassifier> {
        return this.roleModel.create(role);
    }
    
}