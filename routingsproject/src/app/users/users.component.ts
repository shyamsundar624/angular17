import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,UserComponent,FormsModule,UsersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Ramu'
    },
    {
      id: 2,
      name: 'Sita'
    },
    {
      id: 3,
      name: 'Ganesh'
    }
  ];
}
