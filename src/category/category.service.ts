/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.schema';
import { Injectable } from '@nestjs/common';
import { CategoryCreateDto } from 'src/dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: mongoose.Model<CategoryDocument>,
  ) {}
  async findAllCategory(): Promise<Category[]> {
    const categories = await this.categoryModel.find({});
    return categories;
  }

  async createCategory(category: CategoryCreateDto): Promise<Category> {
    return await new this.categoryModel(category).save();
  }
}
