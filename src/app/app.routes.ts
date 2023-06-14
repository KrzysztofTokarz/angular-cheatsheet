import { Routes } from '@angular/router';

export enum AppRoutes {
  Angular_16_Signals = 'Angular_16_Signals',
  Angular_16_RequiredInput = 'Angular_16_RequiredInput',
  Angular_16_DestroyRef = 'Angular_16_DestroyRef',
}

export const defaultRoute = AppRoutes.Angular_16_Signals;

export const routes: Routes = [
  { path: '', redirectTo: defaultRoute, pathMatch: 'full' },
  {
    path: AppRoutes.Angular_16_Signals,
    loadComponent: () => import('./features/angular16/signals/signals.component').then((m) => m.SignalsComponent),
  },
  {
    path: AppRoutes.Angular_16_RequiredInput,
    loadComponent: () =>
      import('./features/angular16/required-input/required-input.component').then((m) => m.RequiredInputComponent),
  },
  {
    path: AppRoutes.Angular_16_DestroyRef,
    loadComponent: () =>
      import('./features/angular16/destroy-ref/destroy-ref.component').then((m) => m.DestroyRefComponent),
  },
  { path: '**', redirectTo: defaultRoute, pathMatch: 'full' },
];
