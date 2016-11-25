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