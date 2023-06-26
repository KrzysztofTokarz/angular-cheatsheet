import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { Observable, delay, of } from 'rxjs';
import { RouteResolverComponent } from './route-resolver.component';

const someAsyncOperation = <T>(value: T): Observable<T> => of(value).pipe(delay(200));

const routes: Routes = [
  {
    path: '',
    component: RouteResolverComponent,
    children: [
      {
        path: 'child/:name/:surname/:age',
        loadComponent: () =>
          import('./route-resolver-child/route-resolver-child.component').then((m) => m.RouteResolverChildComponent),
        resolve: {
          name: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => someAsyncOperation(route.params['name']),
          surname: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
            someAsyncOperation(route.params['surname']),
          age: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => someAsyncOperation(+route.params['age']),
        },
      },
    ],
  },
];

export default routes;
