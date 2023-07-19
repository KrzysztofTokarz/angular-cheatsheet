import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { ButtonComponent } from '../../../components/button/button.component';
import { LiveExampleComponent } from '../../../components/live-example/live-example.component';

@Component({
  selector: 'app-lazy-routes',
  standalone: true,
  templateUrl: './lazy-routes.component.html',
  styleUrls: ['./lazy-routes.component.scss'],
  imports: [CommonModule, RouterOutlet, ButtonComponent, RouterLink, LiveExampleComponent],
})
export class LazyRoutesComponent {
  constructor(private router: Router) {}

  shouldShowResetBtn() {
    return this.router.url !== `/${AppRoutes.Angular_15_LazyRoutes}`;
  }
}
