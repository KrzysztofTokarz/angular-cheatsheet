import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-routes-second-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-routes-second-child.component.html',
  styleUrls: ['./lazy-routes-second-child.component.scss']
})
export class LazyRoutesSecondChildComponent {

}
