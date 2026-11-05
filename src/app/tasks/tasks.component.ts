import { Component, computed, input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from "./dummy-tasks";
import type { User } from "../user/user.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
    user = input.required<User>();
    
    filteredTasks = computed(
        () => dummyTasks.filter(
            task => task.userId === this.user().id));
}