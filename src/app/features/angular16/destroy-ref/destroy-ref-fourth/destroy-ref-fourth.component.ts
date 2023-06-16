import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-destroy-ref-fourth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destroy-ref-fourth.component.html',
  styleUrls: ['./destroy-ref-fourth.component.scss'],
})
export class DestroyRefFourthComponent {
  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => console.log('Interval from fourth component'));
  }
}
