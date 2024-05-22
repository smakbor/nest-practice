import { CategoryService } from './category.service';
import { Category } from './category.schema';
import { CategoryCreateDto } from 'src/dto/category.dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getAllTasks(): Promise<Category[]>;
    createCategory(category: CategoryCreateDto): Promise<Category>;
}
