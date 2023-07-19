import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { LiveExampleComponent } from "../../../components/live-example/live-example.component";

@Component({
    selector: 'app-route-resolver',
    standalone: true,
    templateUrl: './route-resolver.component.html',
    styleUrls: ['./route-resolver.component.scss'],
    imports: [CommonModule, RouterOutlet, ButtonComponent, LiveExampleComponent, RouterLink]
})
export class RouteResolverComponent {
  protected readonly childRoutePart = 'child';
  
  constructor(protected router: Router, private activatedRoute: ActivatedRoute) {}

  loadChild() {
    // according to signature of route path: "child/:name/:surname/:age"
    this.router.navigate([this.childRoutePart, 'Adam', 'Kowalski', 20], { relativeTo: this.activatedRoute });
  }
}
