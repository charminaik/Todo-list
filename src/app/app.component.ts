import { Component } from '@angular/core';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { RouterOutlet , RouterLink , RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'charmi-todo-list';
}
