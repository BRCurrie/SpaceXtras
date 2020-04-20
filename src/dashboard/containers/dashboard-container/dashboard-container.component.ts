import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Launch } from "../../../shared/interfaces/launch";
import { NextLaunchService } from "../../services/next-launch.service";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-dashboard-container",
  template: `
    <app-jumbotron [background]="bgImg"></app-jumbotron>
    <app-dashboard [nextLaunch]="data$ | async"></app-dashboard>
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styles: [],
})
export class DashboardContainerComponent implements OnInit {
  bgImg: string = "dashboardImage";

  data$: Observable<Launch>;

  constructor(private nextLaunchService: NextLaunchService) {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  ngOnInit() {
    this.data$ = this.nextLaunchService
      .getRoadster()
      .pipe(map((nextLaunch) => nextLaunch));

    // this.bgImg = "dashboardImage";
  }
}

// <app-jumbotron [background]="bgImg"></app-jumbotron>
// bgImg: string = "";
