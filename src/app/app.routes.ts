import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'portofolio',component:PortofolioComponent,title:'Portofolio'},
    {path:'contact',component:ContactComponent,title:'Contact'},
    {path:'**',component:NotFoundComponent,title:'Not Found'}
];
