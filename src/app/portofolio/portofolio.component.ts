import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css',
})
export class PortofolioComponent {
  
  
  

  images: string[] = [
    'assets/Img/port1.png',
    'assets/Img/port2.png',
    'assets/Img/port3.png',
    'assets/Img/port1.png',
    'assets/Img/port2.png',
    'assets/Img/port3.png',
  ];

  hoveredIndex: number | null = null;
  selectedImage: string | null = null;
  mouseOver(index: number) {
    this.hoveredIndex = index;
  }

  mouseLeave() {
    this.hoveredIndex = null;
  }

  showModal(image: string) {
    this.selectedImage = image;
    const modal = document.getElementById('imageModal');
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }
}
