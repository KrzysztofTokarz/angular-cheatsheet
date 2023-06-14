import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutes } from 'src/app/app.routes';
import { DestroyRefComponent } from '../../features/angular16/destroy-ref/destroy-ref.component';
import { RequiredInputComponent } from '../../features/angular16/required-input/required-input.component';
import { SignalsComponent } from '../../features/angular16/signals/signals.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [CommonModule, DestroyRefComponent, RequiredInputComponent, SignalsComponent],
})
export class MainContentComponent {
  AppRoutes = AppRoutes;

  constructor(protected navigationService: NavigationService) {}
}
