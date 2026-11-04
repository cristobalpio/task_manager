import { Component, input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from "./dummy-tasks";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
    userName = input<string>();
    tasks = dummyTasks;

}