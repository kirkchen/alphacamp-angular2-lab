# Lab06 - 練習使用 HttpModule

1. 打開 `todo.service.ts`，使用 `http` 呼叫 api

    ``` typescript
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
    }
    ```

1. 打開 `app.module.ts`，移除 `TodoLocalService` 的註冊

    ``` typescript
    providers: [
        TodoService,
        // { provide: TodoService, useClass: TodoLocalService }
    ],
    ```

1. 打開 `todo.service.ts`，新增 Create 方法

    ``` typescript
    createTodo(data: Todo): Promise<void> {
        var url = `http://ac-todo.azurewebsites.net/api/todos`
        return this.http.post(url, data)
            .toPromise();
    }
    ```

1. 打開 `todo-input.component.ts`，增加新增 todo 功能

    ``` typescript
    import { Component, OnInit } from '@angular/core';
    import { Todo } from '../../models/todo';
    import { TodoService } from '../../services/todo.service';

    @Component({
        selector: 'app-todo-input',
        templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css']
    })
    export class TodoInputComponent implements OnInit {
        content: string;

        constructor(
            private todoService: TodoService
        ) { }

        ngOnInit() {
            this.content = undefined;
        }

        onSubmit(){
            let todo: Todo = {
                Id: undefined,
                Content: this.content
            };

            this.todoService.createTodo(todo)
                .then(()=>{
                    this.content = undefined;
                    location.reload();
                })
            }
        }
    ```

1. 打開 `todo-input.component.html`，綁定 submit 按鈕

    ```
    <label for="content">Content:</label>
    <input type="text" [(ngModel)]="content">
    <button type="button" (click)="onSubmit()">Submit</button>
    ```