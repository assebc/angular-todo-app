import { Component, inject } from "@angular/core";
import { TodoFormComponent } from "./ui/todo-form/todo-form.component";
import { TodoService } from "../shared/data-acess/todo.service";
import { TodoListComponent } from "./ui/todo-list/todo-list.component";

@Component({
	standalone: true,
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	imports: [TodoFormComponent, TodoListComponent]
})
export default class HomeComponent {
	todoService = inject(TodoService);
}