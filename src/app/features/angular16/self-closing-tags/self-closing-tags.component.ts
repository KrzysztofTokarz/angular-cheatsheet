import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelfClosingComponentComponent } from './self-closing-component/self-closing-component.component';

@Component({
  selector: 'app-self-closing-tags',
  standalone: true,
  templateUrl: './self-closing-tags.component.html',
  styleUrls: ['./self-closing-tags.component.scss'],
  imports: [CommonModule, SelfClosingComponentComponent],
})
export default class SelfClosingTagsComponent {
  readonly tagBefore = '<app-self-closing-component />';
  readonly tagAfter = '<app-self-closing-component></app-self-closing-component>';
}
