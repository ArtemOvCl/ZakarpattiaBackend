import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class RoleClassifier {
    
  _id: string;

  @Prop({ required: true })
  name: string;
}

export const RoleClassifierSchema = SchemaFactory.createForClass(RoleClassifier);
