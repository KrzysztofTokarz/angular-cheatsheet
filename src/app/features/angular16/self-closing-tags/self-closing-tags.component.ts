import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelfClosingComponentComponent } from "./self-closing-component/self-closing-component.component";

@Component({
    selector: 'app-self-closing-tags',
    standalone: true,
    templateUrl: './self-closing-tags.component.html',
    styleUrls: ['./self-closing-tags.component.scss'],
    imports: [CommonModule, SelfClosingComponentComponent]
})
export class SelfClosingTagsComponent {
  readonly differenceDesc = 'So we can write <app-self-closing-component /> instead of <app-self-closing-component></app-self-closing-component>'
}
