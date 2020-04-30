import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Launch } from "../../../shared/interfaces/launch";
import { NextLaunchService } from "../../services/next-launch.service";

import { JumboData } from "../../../shared/interfaces/jumboData";

@Component({
  selector: "app-dashboard-container",
  template: `
    <app-jumbotron [background]="bgImg" [pageData]="pageData"></app-jumbotron>
    <app-dashboard [nextLaunch]="data$ | async"></app-dashboard>
  `,
  styles: [],
})
export class DashboardContainerComponent implements OnInit {
  bgImg: string = "dashboardImage";

  pageData: JumboData = {
    title: "Home",
    description: "Filler Text",
  };

  data$: Observable<Launch>;

  constructor(private nextLaunchService: NextLaunchService) {}

  ngOnInit() {
    this.data$ = this.nextLaunchService
      .getRoadster()
      .pipe(map((nextLaunch) => nextLaunch));
  }
}
