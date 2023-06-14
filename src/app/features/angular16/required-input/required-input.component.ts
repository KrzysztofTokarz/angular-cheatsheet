import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-required-input',
  standalone: true,
  templateUrl: './required-input.component.html',
  styleUrls: ['./required-input.component.scss'],
  imports: [CommonModule],
})
export class RequiredInputComponent {}
