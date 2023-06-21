import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { AsyncSubject, distinctUntilChanged, filter, map } from 'rxjs';
import { AppRoutes } from '../app.routes';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  activeLink?: AppRoutes;
  activeLinkSetDone$ = new AsyncSubject<void>();

  constructor(router: Router) {
    router.events
      .pipe(
        map((_) => router.url),
        filter((url) => url !== '/'),
        distinctUntilChanged(),
        takeUntilDestroyed()
      )
      .subscribe((url) => {
        // remove the '/' sign at the beggining and take first segment of url
        this.activeLink = url.substring(1).split('/')[0] as AppRoutes;
        this.activeLinkSetDone$.next();
        this.activeLinkSetDone$.complete();
      });
  }
}
