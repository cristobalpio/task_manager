import { Component, computed, input, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User, UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    users = DUMMY_USERS;
    user = signal<User>({
        id: '',
        name: '',
        avatar: ''
    });

    selectedUser(user: User){
        this.user.set(user);
    };
}
