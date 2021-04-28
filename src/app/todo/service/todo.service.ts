import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() {}

  loggerTodos(): void {
    console.log(this.todos);
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index === -1) {
      return false;
    }
    this.todos.splice(index, 1);
    return true;
  }
}
