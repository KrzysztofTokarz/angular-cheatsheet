import { AfterViewInit, Directive, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";
import { AppRoutes } from "src/app/app.routes";
import { NavLinkComponent } from "./nav-link/nav-link.component";

@Directive()
export class NavSectionBaseComponent implements AfterViewInit {
  @ViewChildren(NavLinkComponent) navLinksComponents!: QueryList<NavLinkComponent>;
  @ViewChild(MatExpansionPanel) panel!: MatExpansionPanel;

  protected AppRoutes = AppRoutes;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.navLinksComponents.some((x) => x.activated)) {
        this.panel.open();
      }
    }, 100);
  }
}
