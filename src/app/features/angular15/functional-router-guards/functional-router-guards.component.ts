import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { ButtonComponent } from '../../../components/button/button.component';
import { LiveExampleComponent } from '../../../components/live-example/live-example.component';
import { FunctionalRouterGuardsService } from './functional-router-guards.service';

@Component({
  selector: 'app-functional-router-guards',
  standalone: true,
  templateUrl: './functional-router-guards.component.html',
  styleUrls: ['./functional-router-guards.component.scss'],
  imports: [CommonModule, ButtonComponent, RouterOutlet, RouterLink, LiveExampleComponent],
})
export class FunctionalRouterGuardsComponent {
  constructor(public functionalRouterGuardsService: FunctionalRouterGuardsService, private router: Router) {}

  shouldShowResetBtn() {
    return this.router.url !== `/${AppRoutes.Angular_15_FunctionalRouterGuards}`;
  }
}
