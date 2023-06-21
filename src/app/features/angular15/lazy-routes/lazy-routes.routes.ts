import { Routes } from '@angular/router';
import { LazyRoutesComponent } from './lazy-routes.component';

export const LAZY_ROUTES: Routes = [
  {
    path: '',
    component: LazyRoutesComponent,
    children: [
      {
        path: 'first-child',
        loadComponent: () =>
          import('./lazy-routes-first-child/lazy-routes-first-child.component').then(
            (m) => m.LazyRoutesFirstChildComponent
          ),
      },
      {
        path: 'second-child',
        loadComponent: () =>
          import('./lazy-routes-second-child/lazy-routes-second-child.component').then(
            (m) => m.LazyRoutesSecondChildComponent
          ),
      },
      {
        path: 'third-child',
        loadComponent: () =>
          import('./lazy-routes-third-child/lazy-routes-third-child.component').then(
            (m) => m.LazyRoutesThirdChildComponent
          ),
      },
    ],
  },
];
