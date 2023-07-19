import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-live-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-example.component.html',
  styleUrls: ['./live-example.component.scss'],
})
export class LiveExampleComponent {
  @Input() openConsole = false;
}
