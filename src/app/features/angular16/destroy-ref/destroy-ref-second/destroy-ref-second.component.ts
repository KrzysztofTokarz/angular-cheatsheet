import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { AsyncSubject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-destroy-ref-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destroy-ref-second.component.html',
  styleUrls: ['./destroy-ref-second.component.scss'],
})
export class DestroyRefSecondComponent implements OnDestroy {
  private onDestroy$ = new AsyncSubject<void>();

  constructor() {
    interval(1000)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => console.log('Interval from second component'));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
