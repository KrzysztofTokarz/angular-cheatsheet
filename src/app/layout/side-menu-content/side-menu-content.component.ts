import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { AppRoutes } from 'src/app/app.routes';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';

@Component({
  selector: 'app-side-menu-content',
  standalone: true,
  templateUrl: './side-menu-content.component.html',
  styleUrls: ['./side-menu-content.component.scss'],
  imports: [CommonModule, MatListModule, RouterLink, NavLinkComponent, MatExpansionModule, NavPanelComponent],
})
export class SideMenuContentComponent {
  AppRoutes = AppRoutes;

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
        // remove the '/' sign at the beggining and take first segment of url
        this.activeLink = url.substring(1).split('/')[0] as AppRoutes;
      });
  }
}
