import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { DirectiveCompositionInjectedComponent } from "./directive-composition-injected/directive-composition-injected.component";
import { DirectiveCompositionInputsOutputsComponent } from './directive-composition-inputs-outputs/directive-composition-inputs-outputs.component';
import { DirectiveCompositionLoggerComponent } from './directive-composition-logger/directive-composition-logger.component';
import { DirectiveCompositionNestedComponent } from './directive-composition-nested/directive-composition-nested.component';

@Component({
    selector: 'app-directive-composition',
    standalone: true,
    templateUrl: './directive-composition.component.html',
    styleUrls: ['./directive-composition.component.scss'],
    imports: [
        CommonModule,
        DirectiveCompositionLoggerComponent,
        DirectiveCompositionInputsOutputsComponent,
        InputComponent,
        FormsModule,
        DirectiveCompositionNestedComponent,
        ButtonComponent,
        DirectiveCompositionInjectedComponent
    ]
})
export default class DirectiveCompositionComponent {
  someNumber = 1;

  showDoubledNumber(value: number) {
    console.log(`The doubled number is - ${value}`);
  }
}
