import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((e) => e.HomeComponent),
    title: 'Home',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (e) => e.ProductsComponent
      ),
    title: 'Products',
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product/product.component').then(
        (e) => e.ProductComponent
      ),
    title: 'Product Details',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (e) => e.NotFoundComponent
      ),
    title: 'Not Found',
  },
];
