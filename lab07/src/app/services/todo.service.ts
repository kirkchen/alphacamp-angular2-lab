import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from '../models/todo';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  constructor(
    private http: Http
  ) { }

  getTodoList(): Promise<Todo[]> {
    var url = `http://ac-todo.azurewebsites.net/api/todos`
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Todo[]);
  }

  createTodo(data: Todo): Promise<void> {
    var url = `http://ac-todo.azurewebsites.net/api/todos`
    return this.http.post(url, data)
      .toPromise();
  }
}
