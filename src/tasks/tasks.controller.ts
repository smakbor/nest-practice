/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.schema';
import { CreateTaskDto } from 'src/dto/create-task-dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.findAll();
  }
  @Post()
  async create(@Body() task: CreateTaskDto): Promise<Task> {
    return await this.taskService.createTask(task);
  }
}
