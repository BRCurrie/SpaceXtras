import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

import { Roadster } from "../../interfaces/roadster";
import { JumboData } from "../../../shared/interfaces/jumboData";

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

  data$: Observable<Roadster[]>;

  constructor(private store: Store<fromStore.RoadsterFeatureState>) {}

  ngOnInit() {
    this.data$ = this.store.select(fromStore.getRoadster);
  }
}
