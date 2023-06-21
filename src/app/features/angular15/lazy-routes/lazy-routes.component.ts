import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
    selector: 'app-lazy-routes',
    standalone: true,
    templateUrl: './lazy-routes.component.html',
    styleUrls: ['./lazy-routes.component.scss'],
    imports: [CommonModule, RouterOutlet, ButtonComponent, RouterLink]
})
export class LazyRoutesComponent {

}
