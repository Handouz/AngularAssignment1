import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css',
})
export class PortofolioComponent {

  
  divElement: any;
  mouseover(e: MouseEvent) {
    // const target = e.target as HTMLImageElement;
    // const parentNode=target.parentNode as HTMLDivElement;
    // this.divElement = parentNode;
    
    // const children=parentNode.children;
    // const iIcon=children[0] as HTMLElement;
    // iIcon.style.position='absolute';
    // iIcon.style.zIndex='1';

    // let height=target.height;
    // let width=target.width;
    // //target.src='assets/Img/addIcon.png';
    // target.width= width;
    // target.height= height;
    // iIcon.style.width=width.toString()+'px';
    // iIcon.style.height=height.toString()+'px';
  }
//   mouseLeave(e: MouseEvent) {
// //     const image = e.target as HTMLImageElement;
// //     const parentNode=image.parentElement as HTMLDivElement;
   
// //     console.log(parentNode);
// // //     const iIcon=this.divElement.children[0] as HTMLElement;
// // //     iIcon.style.position='absoulte';  
// // //     iIcon.style.zIndex='-1';
// // // // iIcon.style.width='0px';
// // // // iIcon.style.height='0px';
// // //     const image=this.divElement.children[1] as HTMLImageElement;
// // //     image.style.position='absolute';
// // //     image.style.zIndex='1';
//   }


  images: string[] = [
    'assets/Img/port1.png',
    'assets/Img/port2.png',
    'assets/Img/port3.png',
    'assets/Img/port4.png',
    'assets/Img/port5.png',
    'assets/Img/port6.png',
  ];

hoveredIndex:number|null=null;
selectedImage:string|null=null;
  mouseOver(index: number) {

    this.hoveredIndex=index;
  }

  mouseLeave() {
    this.hoveredIndex=null; 
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
