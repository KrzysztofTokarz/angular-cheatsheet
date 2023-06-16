import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  imports: [CommonModule, ButtonComponent, InputComponent, FormsModule],
})
export class SignalsComponent {
  counter = signal(0);
  text = signal('Some text');
  doubleCounter = computed(() => this.counter() * 2);
  staticCounter = this.counter() * 2;
  textFromInputAndCounter = computed(() => `${this.text()} + ${this.counter()}`);

  constructor() {
    effect(() => {
      console.log(`I will run when counter changes - ${this.counter()}`);
    });
    effect(() => {
      console.log(`I will run when text changes - ${this.text()}`);
    });
    effect(() => {
      console.log(`I will run when counter or text changes - ${this.text()} + ${this.counter()}`);
    });
  }

  increment() {
    this.counter.update((x) => x + 1);
  }
}
