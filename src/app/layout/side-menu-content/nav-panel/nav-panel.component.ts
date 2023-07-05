import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { AppRoutes } from 'src/app/app.routes';
import { TypedChanges } from 'src/app/types/typed-changes';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPanelComponent implements OnChanges {
  @ContentChildren(NavLinkComponent) navLinksComponents!: QueryList<NavLinkComponent>;
  @ViewChild(MatExpansionPanel) panel!: MatExpansionPanel;

  @Input({ required: true }) title!: string;
  @Input({ required: true }) activeLink?: AppRoutes;

  constructor() {}

  ngOnChanges(changes: TypedChanges<NavPanelComponent>) {
    if (changes.activeLink?.currentValue) {
      setTimeout(() => {
        if (this.navLinksComponents.some((x) => x.activated)) {
          this.panel.open();
        }
      }, 100);
    }
  }
}
