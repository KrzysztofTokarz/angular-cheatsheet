import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  imports: [CommonModule, ButtonComponent],
})
export class SignalsComponent {}
