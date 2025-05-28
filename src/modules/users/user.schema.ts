import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class User {
  
  _id: string;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  hashedPassword: string;

  createdAt?: Date;
} 

export const UserSchema = SchemaFactory.createForClass(User);
