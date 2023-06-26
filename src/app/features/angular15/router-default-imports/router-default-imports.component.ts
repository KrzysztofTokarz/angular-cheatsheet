import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-router-default-imports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './router-default-imports.component.html',
  styleUrls: ['./router-default-imports.component.scss']
})
export default class RouterDefaultImportsComponent {
  readonly from = `loadComponent: () => import('./lazy-file').then(m => m.LazyComponent),`
  readonly to = `loadComponent: () => import('./lazy-file'),`
}
