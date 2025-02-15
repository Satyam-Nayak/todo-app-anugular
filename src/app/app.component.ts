import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgFor, NgIf, FormsModule] // Add necessary imports
})
export class AppComponent {
  title = 'To-Do App';
  todos: { text: string; completed: boolean }[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
