import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { FunctionalRouterGuardsService } from './functional-router-guards.service';

@Component({
  selector: 'app-functional-router-guards',
  standalone: true,
  templateUrl: './functional-router-guards.component.html',
  styleUrls: ['./functional-router-guards.component.scss'],
  imports: [CommonModule, ButtonComponent, RouterOutlet, RouterLink],
})
export class FunctionalRouterGuardsComponent {
  constructor(public functionalRouterGuardsService: FunctionalRouterGuardsService) {}
}
