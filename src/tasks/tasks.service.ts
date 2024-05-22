/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './task.schema';
import * as mongoose from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-task-dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: mongoose.Model<TaskDocument>,
  ) {}
  async findAll(): Promise<Task[]> {
    const tasks = await this.taskModel.find();
    return tasks;
  }
  async createTask(task: CreateTaskDto): Promise<Task> {
    return await new this.taskModel(task).save();
  }
}
