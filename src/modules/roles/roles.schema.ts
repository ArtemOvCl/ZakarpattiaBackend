import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Role {
    
  _id: string;

  @Prop({ required: true })
  name: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
