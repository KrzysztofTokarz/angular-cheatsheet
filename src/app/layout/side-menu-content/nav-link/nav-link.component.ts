import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterLink],
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLinkComponent {
  @Input({ required: true }) path!: AppRoutes;
  @Input({ required: true }) activeLink: AppRoutes | undefined;

  get activated() {
    return this.activeLink === this.path;
  }

  constructor() {}

  clearConsole() {
    console.clear();
  }
}
