import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { FunctionalRouterGuardsComponent } from './functional-router-guards.component';
import { FunctionalRouterGuardsService } from './functional-router-guards.service';

const routes: Routes = [
  {
    path: '',
    component: FunctionalRouterGuardsComponent,
    children: [
      {
        path: 'first-child',
        loadComponent: () =>
          import('./functional-router-guards-first-child/functional-router-guards-first-child.component').then(
            (m) => m.FunctionalRouterGuardsFirstChildComponent
          ),
        canActivate: [() => inject(FunctionalRouterGuardsService).isNavigationAllowed],
      },
      {
        path: 'second-child',
        loadComponent: () =>
          import('./functional-router-guards-second-child/functional-router-guards-second-child.component').then(
            (m) => m.FunctionalRouterGuardsSecondChildComponent
          ),
        canActivate: [() => inject(FunctionalRouterGuardsService).isNavigationAllowed],
      },
      {
        path: 'third-child',
        loadComponent: () =>
          import('./functional-router-guards-third-child/functional-router-guards-third-child.component').then(
            (m) => m.FunctionalRouterGuardsThirdChildComponent
          ),
        canActivate: [() => inject(FunctionalRouterGuardsService).isNavigationAllowed],
      },
    ],
  },
];

export default routes;
