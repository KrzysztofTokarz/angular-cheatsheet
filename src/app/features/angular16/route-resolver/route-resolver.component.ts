import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-route-resolver',
  standalone: true,
  templateUrl: './route-resolver.component.html',
  styleUrls: ['./route-resolver.component.scss'],
  imports: [CommonModule, RouterOutlet, ButtonComponent],
})
export class RouteResolverComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  loadChild() {
    this.router.navigate(['child', 'Adam', 'Kowalski', 20], { relativeTo: this.activatedRoute });
  }
}
