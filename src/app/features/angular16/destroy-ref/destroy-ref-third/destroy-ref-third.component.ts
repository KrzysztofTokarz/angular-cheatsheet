import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { AsyncSubject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-destroy-ref-third',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destroy-ref-third.component.html',
  styleUrls: ['./destroy-ref-third.component.scss'],
})
export class DestroyRefThirdComponent {
  private onDestroy$ = new AsyncSubject<void>();

  constructor() {
    interval(1000)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => console.log('Interval from third component'));

    inject(DestroyRef).onDestroy(() => {
      this.onDestroy$.next();
      this.onDestroy$.complete();
    });
  }
}
