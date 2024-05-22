/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

export enum TaskStatus {
  DONE = 'DONE',
  INPROGRESS = 'INPROGRESS',
}

@Schema({
  timestamps: true,
})
export class Task {
  @Prop()
  title: string;
  @Prop()
  des: string;
  @Prop()
  status: TaskStatus;
}
export const TaskSchema = SchemaFactory.createForClass(Task);

/*
1) 




*/
