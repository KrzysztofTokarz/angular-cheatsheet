import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { AngularFifteenSectionComponent } from './angular-fifteen-section/angular-fifteen-section.component';
import { AngularSixteenSectionComponent } from './angular-sixteen-section/angular-sixteen-section.component';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'app-side-menu-content',
  standalone: true,
  templateUrl: './side-menu-content.component.html',
  styleUrls: ['./side-menu-content.component.scss'],
  imports: [
    CommonModule,
    MatListModule,
    RouterLink,
    NavLinkComponent,
    MatExpansionModule,
    AngularSixteenSectionComponent,
    AngularFifteenSectionComponent,
  ],
})
export class SideMenuContentComponent implements OnInit {
  AppRoutes = AppRoutes;

  constructor() {}

  ngOnInit(): void {}
}
