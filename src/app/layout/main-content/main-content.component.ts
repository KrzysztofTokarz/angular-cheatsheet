import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [CommonModule, MatCardModule, RouterOutlet],
})
export class MainContentComponent {
  AppRoutes = AppRoutes;

  constructor() {}
}
