import { Component , Output , EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})

export class AddTodoComponent {
  title:string | undefined;
  desc:string | undefined;
  date:Date | undefined;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter;

  onSubmit(){

    if (!this.title || !this.desc || !this.date) {
      console.error('All fields are required!');
      return;
    }
    
    const todo = {
      sno: 4,
      title: this.title,
      desc: this.desc,
      date: this.date,
      active: true
    }

    this.todoAdd.emit(todo);
  }
}
