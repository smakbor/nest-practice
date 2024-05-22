/* eslint-disable prettier/prettier */

import { TaskStatus } from 'src/tasks/task.schema';

export class CreateTaskDto {
  readonly title: string;
  readonly des: string;
  readonly status: TaskStatus;
}
