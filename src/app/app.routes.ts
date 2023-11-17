import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details.component')
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
