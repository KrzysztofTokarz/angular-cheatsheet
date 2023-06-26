import { Routes } from '@angular/router';

export enum AppRoutes {
  Angular_16_Signals = 'Angular_16_Signals',
  Angular_16_RequiredInput = 'Angular_16_RequiredInput',
  Angular_16_TransformInput = 'Angular_16_TransformInput',
  Angular_16_DestroyRef = 'Angular_16_DestroyRef',
  Angular_16_RouteResolver = 'Angular_16_RouteResolver',
  Angular_16_SelfClosingTags = 'Angular_16_SelfClosingTags',
  Angular_15_LazyRoutes = 'Angular_15_LazyRoutes',
  Angular_15_DirectiveComposition = 'Angular_15_DirectiveComposition',
  Angular_15_FunctionalRouterGuards = 'Angular_15_FunctionalRouterGuards',
  Angular_15_RouterDefaultImports = 'Angular_15_RouterDefaultImports',
}

export const defaultRoute = AppRoutes.Angular_16_Signals;

export const routes: Routes = [
  { path: '', redirectTo: defaultRoute, pathMatch: 'full' },
  {
    path: AppRoutes.Angular_16_Signals,
    loadComponent: () => import('./features/angular16/signals/signals.component'),
  },
  {
    path: AppRoutes.Angular_16_RequiredInput,
    loadComponent: () => import('./features/angular16/required-input/required-input.component'),
  },
  {
    path: AppRoutes.Angular_16_TransformInput,
    loadComponent: () => import('./features/angular16/transform-input/transform-input.component'),
  },
  {
    path: AppRoutes.Angular_16_DestroyRef,
    loadComponent: () => import('./features/angular16/destroy-ref/destroy-ref.component'),
  },
  {
    path: AppRoutes.Angular_16_RouteResolver,
    loadChildren: () => import('./features/angular16/route-resolver/route-resolver.routes'),
  },
  {
    path: AppRoutes.Angular_16_SelfClosingTags,
    loadComponent: () => import('./features/angular16/self-closing-tags/self-closing-tags.component'),
  },
  {
    path: AppRoutes.Angular_15_LazyRoutes,
    loadChildren: () => import('./features/angular15/lazy-routes/lazy-routes.routes'),
  },
  {
    path: AppRoutes.Angular_15_DirectiveComposition,
    loadComponent: () => import('./features/angular15/directive-composition/directive-composition.component'),
  },
  {
    path: AppRoutes.Angular_15_FunctionalRouterGuards,
    loadChildren: () => import('./features/angular15/functional-router-guards/functional-router-guards.routes'),
  },
  {
    path: AppRoutes.Angular_15_RouterDefaultImports,
    loadComponent: () => import('./features/angular15/router-default-imports/router-default-imports.component'),
  },
  { path: '**', redirectTo: defaultRoute, pathMatch: 'full' },
];
