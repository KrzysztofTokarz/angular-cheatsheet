import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DeepNestedDirective, NestedDirective, RootDirective } from '../nested-directives';

@Component({
  selector: 'app-directive-composition-injected',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-composition-injected.component.html',
  styleUrls: ['./directive-composition-injected.component.scss'],
  hostDirectives: [RootDirective],
})
export class DirectiveCompositionInjectedComponent {
  constructor(
    public nestedDirective: NestedDirective,
    public rootDirective: RootDirective,
    public deepNestedDirective: DeepNestedDirective
  ) {}

  ngOnInit() {}
}
