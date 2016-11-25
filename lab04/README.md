# Lab04 - 練習輸入元件和列表

1. 產生 `TodoList` Component，顯示 `Todo` 清單

    ``` bash
    ng g component shared/todo-list
    ```

1. 打開 `todo-list.component.ts`，指定 `TodoList` 資料

    ``` typescript
    import { Component, OnInit } from '@angular/core';
    import { Todo } from '../../models/todo';

    @Component({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.css']
    })
    export class TodoListComponent implements OnInit {
        todoList: Todo[];

        constructor() { }

        ngOnInit() {
            this.todoList = [{
                Id: 1,
                Content: 'Content 1'
            }, {
                Id: 2,
                Content: 'Content 2'
            }]
        }

    }
    ```   

1. 打開 `todo-list.component.html`，修改 `TodoList` 呈現畫面 

    ``` html
    <ul>
        <li *ngFor="let todo of todoList">{{ todo.Content }}</li>
    </ul>
    ```

1. 產生 `Todo` 頁面，作為 `Todo` 的主畫面 

    ``` bash
    ng g component pages/todo
    ```     

1. 打開 `todo.component.html`，修改 `Todo` 呈現畫面  

    ``` html
    <app-todo-list></app-todo-list>
    ```

1. 產生 `TodoInput` Component，提供輸入 `Todo` 資料

    ``` bash
    ng g component shared/todo-input
    ```

1. 打開 `todo-input.component.ts`，指定資料欄位

    ``` typescript
    import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-todo-input',
        templateUrl: './todo-input.component.html',
        styleUrls: ['./todo-input.component.css']
    })
    export class TodoInputComponent implements OnInit {
        content: string;

        constructor() { }

        ngOnInit() {
            this.content = undefined;
        }
    }
    ```

1. 打開 `todo-input.component.html`，修改資料輸入畫面 

    ``` html
    <label for="content">Content:</label>
    <input type="text" [(ngModel)]="content">
    <button type="button">Submit</button>
    ```


1. 打開 `todo.component.html`，修改 `Todo` 呈現畫面  

    ``` html
    <app-todo-input></app-todo-input>
    <app-todo-list></app-todo-list>
    ```