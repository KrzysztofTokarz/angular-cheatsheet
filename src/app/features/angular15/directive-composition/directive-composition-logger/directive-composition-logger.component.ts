import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoggerDirective } from './logger.directive';

@Component({
  selector: 'app-directive-composition-logger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-composition-logger.component.html',
  styleUrls: ['./directive-composition-logger.component.scss'],
  hostDirectives: [LoggerDirective]
})
export class DirectiveCompositionLoggerComponent {

}
