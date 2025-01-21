import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  localItem: string | null = null;
  todos: Todo[] = [];

  constructor() {
    
  }

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.localItem = localStorage.getItem("todos");
      if (this.localItem !== null) {
        this.todos = JSON.parse(this.localItem);
      }
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      if (this.isBrowser()) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    if (this.isBrowser()) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index].active = !this.todos[index].active;
      this.updateLocalStorage();
    }
  }
  private updateLocalStorage() {
    if (this.isBrowser()) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

}
