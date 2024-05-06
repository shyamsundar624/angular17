import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountlistComponent } from './accountlist/accountlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AccountlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hdfcbank';
}
