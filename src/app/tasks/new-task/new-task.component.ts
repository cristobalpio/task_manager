import { Component, output } from '@angular/core';

@Component({
  selector: 'new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    cancel = output<void>();
    cancel_new_task() {
        this.cancel.emit();
    }

}
