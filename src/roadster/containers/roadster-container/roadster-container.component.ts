import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Roadster } from "../../interfaces/roadster";
import { JumboData } from "../../../shared/interfaces/jumboData";

import { RoadsterService } from "../../services/roadster.service";

@Component({
  selector: "app-roadster-container",
  template: `
    <app-jumbotron [background]="bgImg" [pageData]="pageData"></app-jumbotron>
    <app-roadster [roadster]="data$ | async"></app-roadster>
  `,
  styles: [],
})
export class RoadsterContainerComponent implements OnInit {
  bgImg: string = "roadsterImage";

  pageData: JumboData = {
    title: "The Silliest Thing We Can Imagine",
    description:
      "A powerful statement from a pair of companies that are changing the status quo.",
  };
  // The midnight cherry Tesla Roadster is piloted by Starman. It is the first standard roadworthy vehicle sent into space.

  data$: Observable<Roadster>;
  isLoading = true;

  constructor(private roadsterService: RoadsterService) {}

  ngOnInit() {
    this.data$ = this.roadsterService
      .getRoadster()
      .pipe(map((roadster) => roadster));
  }
}
