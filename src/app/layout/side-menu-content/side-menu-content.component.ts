import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'app-side-menu-content',
  standalone: true,
  templateUrl: './side-menu-content.component.html',
  styleUrls: ['./side-menu-content.component.scss'],
  imports: [CommonModule, MatListModule, RouterLink, NavLinkComponent],
})
export class SideMenuContentComponent implements OnInit {
  AppRoutes = AppRoutes;

  constructor() {}

  ngOnInit(): void {}
}
