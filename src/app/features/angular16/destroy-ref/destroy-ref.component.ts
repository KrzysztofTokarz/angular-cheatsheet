import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { LiveExampleComponent } from "../../../components/live-example/live-example.component";
import { DestroyRefFirstComponent } from './destroy-ref-first/destroy-ref-first.component';
import { DestroyRefFourthComponent } from './destroy-ref-fourth/destroy-ref-fourth.component';
import { DestroyRefSecondComponent } from './destroy-ref-second/destroy-ref-second.component';
import { DestroyRefThirdComponent } from './destroy-ref-third/destroy-ref-third.component';

@Component({
    selector: 'app-destroy-ref',
    standalone: true,
    templateUrl: './destroy-ref.component.html',
    styleUrls: ['./destroy-ref.component.scss'],
    imports: [
        CommonModule,
        ButtonComponent,
        DestroyRefFirstComponent,
        DestroyRefSecondComponent,
        DestroyRefThirdComponent,
        DestroyRefFourthComponent,
        LiveExampleComponent
    ]
})
export default class DestroyRefComponent {
  showFirst = false;
  showSecond = false;
  showThird = false;
  showFourth = false;
}
