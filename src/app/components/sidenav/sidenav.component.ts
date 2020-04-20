import { Component, HostListener, Output, ElementRef } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

import { ScrollDispatcher } from "@angular/cdk/scrolling";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { RouterOutlet } from "@angular/router";

import { fadeInAnimation } from "../../../shared/animations";
import { slideInAnimation } from "../../../shared/animations/slide-in.animation";

import { ScrollPositionService } from "../../../shared/services/scroll-position.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
  animations: [fadeInAnimation, slideInAnimation],
  host: { "[@fadeInAnimation]": "" },
})
export class SidenavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  @Output()
  scrollRatio;

  @HostListener("document:scroll", ["$event"]) onScrollEvent($event) {
    var element = document.querySelector("main");
    var scrollPosition = element.scrollTop;
    var height = element.clientHeight;
    var scrollHeight = element.scrollHeight - height;
    this.scrollRatio = (scrollPosition / scrollHeight) * 100;
    // console.log(this.scrollPosition);
    this.scroll.updatedDataSelection(this.scrollRatio);
    // console.log(this.scrollRatio);
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    public scroll: ScrollPositionService // public scroll2: ScrollDispatcher
  ) {}
}
