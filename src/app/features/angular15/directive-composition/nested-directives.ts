import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDeepNested]',
  standalone: true,
})
export class DeepNestedDirective {
  prop = 'property from DeepNestedDirective';

  @HostListener('click') onClick() {
    console.log('click binding from DeepNestedDirective');
  }
}

@Directive({
  selector: '[appNested]',
  standalone: true,
  hostDirectives: [DeepNestedDirective],
})
export class NestedDirective {
  prop = 'property from NestedDirective';

  @HostListener('click') onClick() {
    console.log('click binding from NestedDirective');
  }
}

@Directive({
  selector: '[appRoot]',
  standalone: true,
  hostDirectives: [NestedDirective],
})
export class RootDirective {
  prop = 'property from RootDirective';

  @HostListener('click') onClick() {
    console.log('click binding from RootDirective');
  }
}
