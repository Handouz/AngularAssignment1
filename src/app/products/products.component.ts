import { Component } from '@angular/core';
import { NoDataFoundComponent } from "../no-data-found/no-data-found.component";
import { ProductComponent } from "../product/product.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NoDataFoundComponent, ProductComponent,RouterLink,RouterLinkActive,RouterOutlet,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  searchText:string='';
}
