import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { NavSectionBaseComponent } from '../nav-section-base.component';

@Component({
  selector: 'app-angular-fifteen-section',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, NavLinkComponent],
  templateUrl: './angular-fifteen-section.component.html',
  styleUrls: ['./angular-fifteen-section.component.scss'],
})
export class AngularFifteenSectionComponent extends NavSectionBaseComponent {}
