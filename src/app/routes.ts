import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/frame/frame.component').then(
        (m) => m.FrameComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
