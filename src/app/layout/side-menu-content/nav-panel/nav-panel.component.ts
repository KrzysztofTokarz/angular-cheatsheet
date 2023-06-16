import { CommonModule } from '@angular/common';
import { Component, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss'],
})
export class NavPanelComponent {
  @ContentChildren(NavLinkComponent) navLinksComponents!: QueryList<NavLinkComponent>;
  @ViewChild(MatExpansionPanel) panel!: MatExpansionPanel;

  @Input({ required: true }) title!: string;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.navLinksComponents.some((x) => x.activated)) {
        this.panel.open();
      }
    }, 100);
  }
}
