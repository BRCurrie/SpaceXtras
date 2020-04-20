import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { OverlayContainer } from "@angular/cdk/overlay";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "../shared/animations/slide-in.animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class AppComponent {
  title = "SpaceX Data";
  theme = "app-theme";

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    overlayContainer: OverlayContainer
  ) {
    overlayContainer.getContainerElement().classList.add("app-theme");
  }
}
