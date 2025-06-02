import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

import { RoleClassifier } from "../roles/roles.schema";


@Schema({ timestamps: true })
export class User {
  
  _id: string;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: false })
  avatarUrl?: string;
  
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  hashedPassword: string;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: RoleClassifier.name, required: true })
  roleId: RoleClassifier;    

  @Prop({ required: true, default: false })
  isVerified: boolean;

  createdAt?: Date;
} 

export const UserSchema = SchemaFactory.createForClass(User);
