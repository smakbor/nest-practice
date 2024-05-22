/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('app')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get('name')
  getName(): string {
    return this.todoService.getName();
  }
  @Post('create')
  createTodo(): string {
    return this.todoService.createTodo();
  }
}
