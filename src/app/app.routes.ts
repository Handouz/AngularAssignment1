import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FoodComponent } from './food/food.component';
import { BeautyComponent } from './beauty/beauty.component';
import { WoodComponent } from './wood/wood.component';
import { AllProductsComponent } from './all-products/all-products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default path
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'portofolio', component: PortofolioComponent, title: 'Portofolio' },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products',
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' }, //default path
      { path: 'all', component: AllProductsComponent, title: 'All Products' },
      { path: 'food', component: FoodComponent, title: 'Food' },
      { path: 'beauty', component: BeautyComponent, title: 'Beauty' },
      { path: 'wood', component: WoodComponent, title: 'Wood' },
    ],
  },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
