import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route-resolver-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-resolver-child.component.html',
  styleUrls: ['./route-resolver-child.component.scss'],
})
export class RouteResolverChildComponent {
  @Input() name!: string;
  @Input() surname!: string;
  @Input() age!: number;
}
