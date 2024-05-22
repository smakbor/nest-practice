/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({
  timestamps: true,
})
export class Category {
  @Prop()
  title: string;
  @Prop()
  remarks: string;
}
export const categorySchema = SchemaFactory.createForClass(Category);
