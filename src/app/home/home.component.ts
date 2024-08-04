import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //Star component inputs
  title: string = 'start Framework';
  color: string = 'white';
  backgroundColor: string = 'white';
}
