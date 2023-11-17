import { Component, computed, inject } from "@angular/core";
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "../shared/data-acess/todo.service";

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export default class DetailComponent {
  private route = inject(ActivatedRoute);
  private todoService = inject(TodoService);

  private paramMap = toSignal(this.route.paramMap);

  todo = computed(() => {
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id'));
  });

}