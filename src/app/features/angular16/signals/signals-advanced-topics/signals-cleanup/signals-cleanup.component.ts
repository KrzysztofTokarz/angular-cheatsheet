import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signals-cleanup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-cleanup.component.html',
  styleUrls: ['./signals-cleanup.component.scss'],
})
export class SignalsCleanupComponent {
  constructor() {
    effect((onCleanup) => {
      const sub = interval(1000).subscribe(() => {
        console.log('i`m interval from signals cleanup component');
      });

      onCleanup(() => {
        sub.unsubscribe();
      });
    });
  }
}
