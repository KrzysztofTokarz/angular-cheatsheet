import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputsOutputsDirective } from './inputs-outputs.directive';

@Component({
  selector: 'app-directive-composition-inputs-outputs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-composition-inputs-outputs.component.html',
  styleUrls: ['./directive-composition-inputs-outputs.component.scss'],
  hostDirectives: [{ directive: InputsOutputsDirective, inputs: ['someNumber'], outputs: ['doubledNumber:out'] }],
})
export class DirectiveCompositionInputsOutputsComponent {}
