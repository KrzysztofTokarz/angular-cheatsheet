import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RootDirective } from '../nested-directives';

@Component({
  selector: 'app-directive-composition-nested',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-composition-nested.component.html',
  styleUrls: ['./directive-composition-nested.component.scss'],
  hostDirectives: [RootDirective],
})
export class DirectiveCompositionNestedComponent {}
