import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { CreateUserDTO } from "./dto/CreateUserDTO";

import { User } from "./user.schema";

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: CreateUserDTO): Promise<User> {
    return this.userModel.create(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await this.userModel.findById(id);
    return user;
  }
}

