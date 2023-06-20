import { CommonModule } from '@angular/common';
import { Component, effect, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../components/button/button.component';
import { InputComponent } from "../../../../components/input/input.component";
import { SignalsCleanupComponent } from "./signals-cleanup/signals-cleanup.component";

const equalityFn = <T>(a: T, b: T) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

@Component({
    selector: 'app-signals-advanced-topics',
    standalone: true,
    templateUrl: './signals-advanced-topics.component.html',
    styleUrls: ['./signals-advanced-topics.component.scss'],
    imports: [CommonModule, ButtonComponent, InputComponent, FormsModule, SignalsCleanupComponent]
})
export class SignalsAdvancedTopicsComponent {
  equalitySignal = signal({ id: 1, name: 'Adam' }, { equal: equalityFn });
  trackedInputValue = signal('I`m tracked');
  untrackedInputValue = signal('I`m untracked');
  showCleanupComp = false;
  
  constructor() {
    effect(() => {
      console.log('------------ Advanced topics ------------')
      console.log(`I will run only on init because of equality function ${JSON.stringify(this.equalitySignal())}`)
    })
    effect(() => {
      console.log(`I will run only on first input value change change - ${this.trackedInputValue()} ${untracked(this.untrackedInputValue)}`)
    })
  }

  setEqualObject() {
    // even though instance of the object is new, the equality function will consider the values to be equal and not trigger update
    this.equalitySignal.set({ id: 1, name: 'Adam' });
  }
}
