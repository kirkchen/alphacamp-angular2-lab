# Lab03 - 練習產生 Component

1. 產生 `Todo` 的資料 Interface

    ```
    ng g interface models/todo
    ```

1. 指定 `Todo` 的資料欄位

    ``` typescript
    export interface Todo {
        Id: number;

        Content: string;
    }
    ```

1. 產生 `TodoDetail` Component，顯示 `Todo` 資料

    ``` bash
    ng g component pages/todo-detail
    ```

1. 打開 `todo-detail.component.ts`，指定 `Todo` 資料

    ``` typescript
    import { Component, OnInit } from '@angular/core';
    import { Todo } from '../../models/todo';

    @Component({
        selector: 'app-todo-detail',
        templateUrl: './todo-detail.component.html',
        styleUrls: ['./todo-detail.component.css']
    })
    export class TodoDetailComponent implements OnInit {
        todo: Todo;

        constructor() { }

        ngOnInit() {
            this.todo = {
                Id: 1,
                Content: "My todo item"
            };
        }
    }
    ```

1. 打開 `todo-detail.component.html`，修改 `Todo` 呈現畫面

    ``` html
    <label for="id">Id:</label>
    <p>{{ todo.Id }}</p>

    <label for="content">Content:</label>
    <p>{{ todo.Content }}</p>
    ```    

1. 打開 `app.component.html`，顯示 `TodoDetail` Component

    ``` html
    <h1>
        TodoList
    </h1>
    <app-todo-detail></app-todo-detail>
    ```