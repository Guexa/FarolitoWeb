import { Routes } from '@angular/router';
import { ProductosHomeComponent } from './home/productos-home/productos-home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductosHomeComponent },
];
