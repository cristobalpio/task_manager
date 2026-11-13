import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import type { User } from '../user/user.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  user = input.required<User>();

  tasks = signal(dummyTasks);

  filteredTasks = computed(() =>
    this.tasks().filter((task) => task.userId === this.user().id)
  );

  taskCompleted(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }
}