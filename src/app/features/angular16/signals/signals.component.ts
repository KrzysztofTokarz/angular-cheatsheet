import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { SignalsAdvancedTopicsComponent } from "./signals-advanced-topics/signals-advanced-topics.component";

@Component({
    selector: 'app-signals',
    standalone: true,
    templateUrl: './signals.component.html',
    styleUrls: ['./signals.component.scss'],
    imports: [CommonModule, ButtonComponent, InputComponent, FormsModule, SignalsAdvancedTopicsComponent]
})
export default class SignalsComponent {
  counter = signal(1);
  text = signal('Some text');
  doubleCounter = computed(() => this.counter() * 2);
  staticCounter = this.counter() * 2;
  textFromInputAndCounter = computed(() => `${this.text()} + ${this.counter()}`);
  counterObservable$ = toObservable(this.counter);
  counterSignal = toSignal(this.counterObservable$);

  constructor() {
    // effects can be registered only within injection context, for example they cannot be used inside ngOnInit
    effect(() => {
      console.log(`I will run on init and when counter changes - ${this.counter()}`);
    });
    effect(() => {
      console.log(`I will run on init and when text changes - ${this.text()}`);
    });
    effect(() => {
      console.log(`I will run on init and when counter or text changes - ${this.text()} + ${this.counter()}`);
    });
  }

  increment() {
    this.counter.update((x) => x + 1);
  }
}
