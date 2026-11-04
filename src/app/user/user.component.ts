import { Component, computed, input, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    id = input.required<string>();
    name = input.required<string>();
    avatar = input.required<string>();

    event = output<string>();

    imagePath = computed(() => 'assets/users/' + this.avatar());

    userClick() {
        this.event.emit(this.id());
    }
}
