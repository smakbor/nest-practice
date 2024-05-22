/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.schema';
import { CategoryCreateDto } from 'src/dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get()
  async getAllTasks(): Promise<Category[]> {
    return await this.categoryService.findAllCategory();
  }
  @Post('/create')
  async createCategory(@Body() category: CategoryCreateDto): Promise<Category> {
    return this.categoryService.createCategory(category);
  }
}
