import { TaskStatus } from 'src/tasks/task.schema';
export declare class CreateTaskDto {
    readonly title: string;
    readonly des: string;
    readonly status: TaskStatus;
}
