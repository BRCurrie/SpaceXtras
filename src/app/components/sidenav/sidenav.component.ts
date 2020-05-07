import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import {
  RouterOutlet,
  Router,
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Event,
  NavigationError,
} from "@angular/router";

import { fadeInAnimation } from "../../../shared/animations/fade-in.animation";
import { routerAnimation } from "../../../shared/animations/router.animation";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
  animations: [fadeInAnimation, routerAnimation],
  host: { "[@fadeInAnimation]": "" },
})
export class SidenavComponent {
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

  loading = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  // Angular Material puts everything in a scrollable container so
  // we cannot use Angular's Route scrollPositionRestoration.
  onActivate(event) {
    document.getElementsByTagName("main")[0].scrollTo(0, 0);
  }
}

// TODO:
// having the router in an ngIf throws ExpressionChanged error for @routeAnimations
// if I remove this the error should go away, but I will no longer have
// a loading spinner.
// Currently this needs triage
// https://github.com/angular/angular/issues/36173
