import { Component, Input } from "@angular/core";
import { Todo } from "../../../shared/models/todo";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [RouterLink]
})
export class TodoListComponent {
  @Input({required: true}) todos!: Todo[];
}