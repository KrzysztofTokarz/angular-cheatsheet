import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RequiredInputExampleComponent } from "./required-input-example/required-input-example.component";

@Component({
    selector: 'app-required-input',
    standalone: true,
    templateUrl: './required-input.component.html',
    styleUrls: ['./required-input.component.scss'],
    imports: [CommonModule, RequiredInputExampleComponent]
})
export class RequiredInputComponent {
    readonly signature = '@Input({ required: true }) someRequiredProperty!: number'
}
