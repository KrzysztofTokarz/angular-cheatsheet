import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { LiveExampleComponent } from "../../../components/live-example/live-example.component";
import { InputType, TransformInputExampleComponent } from "./transform-input-example/transform-input-example.component";

@Component({
    selector: 'app-transform-input',
    standalone: true,
    templateUrl: './transform-input.component.html',
    styleUrls: ['./transform-input.component.scss'],
    imports: [CommonModule, ButtonComponent, TransformInputExampleComponent, LiveExampleComponent]
})
export default class TransformInputComponent {
  value: InputType;
}
