import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogger]',
  standalone: true,
})
export class LoggerDirective {
  @HostListener('click') onClick() {
    console.log('The component was clicked');
  }

  constructor() {}
}
