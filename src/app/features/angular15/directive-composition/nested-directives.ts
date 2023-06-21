import { Directive, HostListener, Inject, InjectionToken } from '@angular/core';

export const LOG_CLICKS = new InjectionToken<boolean>('log clicks');

@Directive({
  selector: '[appDeepNested]',
  standalone: true,
})
export class DeepNestedDirective {
  prop = 'property from DeepNestedDirective';

  constructor(@Inject(LOG_CLICKS) private logClicks: boolean) {}

  @HostListener('click') onClick() {
    if (this.logClicks) {
      console.log('click binding from DeepNestedDirective');
    }
  }
}

@Directive({
  selector: '[appNested]',
  standalone: true,
  hostDirectives: [DeepNestedDirective],
})
export class NestedDirective {
  prop = 'property from NestedDirective';

  constructor(@Inject(LOG_CLICKS) private logClicks: boolean) {}

  @HostListener('click') onClick() {
    if (this.logClicks) {
      console.log('click binding from NestedDirective');
    }
  }
}

@Directive({
  selector: '[appRoot]',
  standalone: true,
  hostDirectives: [NestedDirective],
  providers: [{ provide: LOG_CLICKS, useValue: true }],
})
export class RootDirective {
  prop = 'property from RootDirective';

  constructor(@Inject(LOG_CLICKS) private logClicks: boolean) {}

  @HostListener('click') onClick() {
    if (this.logClicks) {
      console.log('click binding from RootDirective');
    }
  }
}
