import { Component, computed, input, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

export interface User {
    id: string;
    name: string;
    avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    user = input.required<User>();

    event = output<User>();

    imagePath = computed(() => 'assets/users/' + this.user().avatar);

    userClick() {
        this.event.emit(this.user());
    }
}
