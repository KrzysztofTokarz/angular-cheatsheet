import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-destroy-ref-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destroy-ref-first.component.html',
  styleUrls: ['./destroy-ref-first.component.scss'],
})
export class DestroyRefFirstComponent {
  constructor() {
    interval(1000).subscribe(() => console.log('Interval from first component'));
  }
}
