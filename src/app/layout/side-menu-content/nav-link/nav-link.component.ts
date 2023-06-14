import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterLink],
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent {
  @Input({ required: true }) path!: AppRoutes;

  constructor(protected navigationService: NavigationService) {}
}
