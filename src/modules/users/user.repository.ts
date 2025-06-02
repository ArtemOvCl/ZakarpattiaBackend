import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { User } from "./user.schema";
import { IUser } from "./interfaces/IUser.interface";

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: IUser): Promise<User> {
    return this.userModel.create(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().populate('roleId');
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async deleteUnverifiedUsers() {
    await this.userModel.deleteMany({ isVerified: false });
  }

  async blockUser(userId: string) {
    await this.userModel.findByIdAndUpdate(userId, { isBlocked: true });
  }
}

