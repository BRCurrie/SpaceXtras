import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

import { History } from "../../interfaces/history";
import { JumboData } from "../../../shared/interfaces/jumboData";

@Component({
  selector: "app-timeline-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-jumbotron [background]="bgImg" [pageData]="pageData"></app-jumbotron>
    <app-timeline [history]="data$ | async"></app-timeline>
  `,
  styles: [],
})
export class TimelineContainerComponent implements OnInit {
  bgImg: string = "timelineImage";

  pageData: JumboData = {
    title: "Timeline",
    description: "Revolutionizing space technology",
  };

  data$: Observable<History[]>;
  isLoading = true;

  constructor(private store: Store<fromStore.TimelineFeatureState>) {}

  ngOnInit() {
    this.data$ = this.store.select(fromStore.getAllEvents);
  }
}
