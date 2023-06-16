import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-required-input-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './required-input-example.component.html',
  styleUrls: ['./required-input-example.component.scss'],
})
export class RequiredInputExampleComponent {
  @Input({ required: true }) someRequiredProperty!: number;
}