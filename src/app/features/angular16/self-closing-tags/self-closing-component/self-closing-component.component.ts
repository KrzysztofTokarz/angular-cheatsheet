import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-self-closing-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './self-closing-component.component.html',
  styleUrls: ['./self-closing-component.component.scss']
})
export class SelfClosingComponentComponent {

}
