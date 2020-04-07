import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { History } from "../../interfaces/history";
import { HistoryService } from "../../services/history.service";

@Component({
  selector: "app-timeline-container",
  template: `<app-timeline [history]="data$ | async"></app-timeline>`,
  styles: [],
})
export class TimelineContainerComponent implements OnInit {
  data$: Observable<History>;

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.data$ = this.historyService
      .getHistory()
      .pipe(map((history) => history));
  }
}
