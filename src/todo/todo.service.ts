/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';

Injectable();
export class TodoService {
  getName(): string {
    return 'Hello Todo';
  }

  createTodo(): string {
    return 'I am created by akbor';
  }
}
