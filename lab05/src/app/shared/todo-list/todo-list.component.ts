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