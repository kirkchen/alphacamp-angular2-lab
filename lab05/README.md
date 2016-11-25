# Lab05 - 練習 Dependency Injection

1. 產生 `Todo` Service, 作為資料來源

    ``` bash
    ng g service services/todo
    ```

1. 打開 `todo.service.ts` ，先回傳空資料

    ``` typescript
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
    ```

1. 打開 `todo-list.component.ts` ，改為使用 `TodoService` 取得資料

    ``` typescript
    ngOnInit() {
        this.todoService.getTodoList()
            .then((todoList) => {
                this.todoList = todoList;
            });
    }
    ```

1. 打開 `app.module.ts`，註冊 `TodoService` 至 providers

    ```
    providers: [
        TodoService,    
    ]
    ```

1. 產生 `Todo-Local` Service, 作為開發時本地資料來源

    ``` bash
    ng g service services/todo-local
    ```    

1. 打開 `todo-local.service.ts` ，先回傳假資料

    ``` typescript
    import { Injectable } from '@angular/core';
    import { Todo } from '../models/todo';

    @Injectable()
    export class TodoService {

        constructor() { }

        getTodoList(): Promise<Todo[]> {
            return new Promise((resolve, reject)=>{
                resolve([{
                    Id: 1,
                    Content: 'Content 1'
                }, {
                    Id: 2,
                    Content: 'Content 2'
                }]);
            });
        }
    }
    ```     

1. 打開 `app.module.ts`，註冊 `TodoLocalService` 至 providers

    ```
    providers: [
        TodoService,  
        { provide: TodoService, useClass: TodoLocalService }  
    ]
    ```   