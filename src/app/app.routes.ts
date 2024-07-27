import { Routes } from '@angular/router';
import { VistaPruebaComponent } from './prueba/vista-prueba/vista-prueba.component';
import { ProductosHomeComponent } from './home/productos-home/productos-home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/prueba', pathMatch: 'full' },
  { path: 'home', component: ProductosHomeComponent },
];
