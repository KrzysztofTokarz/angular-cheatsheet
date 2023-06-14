import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { SideMenuContentComponent } from './layout/side-menu-content/side-menu-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, MatSidenavModule, SideMenuContentComponent, MainContentComponent],
})
export class AppComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
