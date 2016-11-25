import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  constructor() { }

  getTodoList(): Promise<Todo[]> {
    return new Promise((resolve, reject)=>{
        resolve(null);
    });
  }
}
