import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoLocalService {

  constructor() { }

  getTodoList(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      resolve([{
        Id: 1,
        Content: 'Content 1'
      }, {
        Id: 2,
        Content: 'Content 2'
      }]);
    })
  }
}
