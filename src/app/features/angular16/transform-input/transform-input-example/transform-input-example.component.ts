import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// we can use those predefined functions too
// import { booleanAttribute, numberAttribute } from '@angular/core';


export type InputType = string | boolean | null | undefined;

function transformBoolean(value: InputType): boolean {
  return value === 'true' || value === true;
}

@Component({
  selector: 'app-transform-input-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transform-input-example.component.html',
  styleUrls: ['./transform-input-example.component.scss'],
})
export class TransformInputExampleComponent {
  @Input({ transform: transformBoolean }) alwaysBoolean: InputType;

  ngOnChanges() {
    console.log('I will always be boolean value', this.alwaysBoolean);
  }
}
