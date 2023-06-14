import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { AppRoutes } from '../app.routes';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  activeLink?: AppRoutes;

  constructor(router: Router) {
    router.events
      .pipe(
        map((_) => router.url),
        filter((url) => url !== '/'),
        distinctUntilChanged(),
        takeUntilDestroyed()
      )
      .subscribe((url) => {
        // remove the '/' sign at the beggining
        this.activeLink = url.substring(1) as AppRoutes;
      });
  }
}
