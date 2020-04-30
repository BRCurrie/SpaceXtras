import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

import { History } from "../../interfaces/history";
import { JumboData } from "../../../shared/interfaces/jumboData";

@Component({
  selector: "app-timeline-container",
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
    description: "Filler Text",
  };

  data$: Observable<History[]>;
  isLoading = true;

  // Revolutionizing Space Technology

  constructor(private store: Store<fromStore.TimelineFeatureState>) {}

  ngOnInit() {
    this.data$ = this.store.select(fromStore.getAllEvents);
    // this.store.dispatch(new fromStore.LoadEvents());
  }
}

//     <app-loading-spinner *ngIf="isLoading; else timeline">
// </app-loading-spinner>
// <ng-template #timeline>
// </ng-template>
