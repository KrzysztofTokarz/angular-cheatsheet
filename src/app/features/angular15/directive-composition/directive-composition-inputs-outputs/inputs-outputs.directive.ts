import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { TypedChanges } from 'src/app/types/typed-changes';

@Directive({
  selector: '[appInputsOutputs]',
  standalone: true,
})
export class InputsOutputsDirective {
  @Input() someNumber!: number;
  @Output() doubledNumber = new EventEmitter<number>();

  constructor() {}

  ngOnChanges(changes: TypedChanges<InputsOutputsDirective>) {
    if (changes.someNumber && !changes.someNumber.isFirstChange()) {
      this.doubledNumber.emit(this.someNumber * 2);
    }
  }
}
