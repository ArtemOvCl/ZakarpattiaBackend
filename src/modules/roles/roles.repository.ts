import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Role } from "./roles.schema";

@Injectable()
export class RolesRepository {
    constructor(
        @InjectModel(Role.name) private roleModel: Model<Role>,
    ) {}

    async findAll(): Promise<Role[]> {
        return this.roleModel.find();
    }
    
}