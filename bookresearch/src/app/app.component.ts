import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookresearch';
}
