import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { NavSectionBaseComponent } from '../nav-section-base.component';

@Component({
  selector: 'app-angular-sixteen-section',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, NavLinkComponent],
  templateUrl: './angular-sixteen-section.component.html',
  styleUrls: ['./angular-sixteen-section.component.scss'],
})
export class AngularSixteenSectionComponent extends NavSectionBaseComponent {}
