import { TasksService } from './tasks.service';
import { Task } from './task.schema';
import { CreateTaskDto } from 'src/dto/create-task-dto';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Promise<Task[]>;
    create(task: CreateTaskDto): Promise<Task>;
}
