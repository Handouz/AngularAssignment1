import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  

  SetVisibility(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    const label = target.previousSibling as HTMLLabelElement;
    if (target.value.length == 0) {
      label.style.visibility = 'hidden';
    } else {
      label.style.visibility = 'visible';
    }
  }
}
