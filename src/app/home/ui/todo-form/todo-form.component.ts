import { Component, EventEmitter, Output, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { CreateTodo } from "../../../shared/models/todo";

@Component({
  standalone: true,
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  imports: [ReactiveFormsModule]
})
export class TodoFormComponent{
  @Output() todoSubmitted = new EventEmitter<CreateTodo>();

  private form = inject(FormBuilder);

  todoForm = this.form.nonNullable.group({
    title: ['', Validators.required],
    description: ['']
  });
}