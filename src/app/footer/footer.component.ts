import { Component } from '@angular/core';
import { CopyrightsComponent } from "../copyrights/copyrights.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CopyrightsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
