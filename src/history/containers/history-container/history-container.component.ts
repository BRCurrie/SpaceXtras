import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { History } from "../../../timeline/interfaces/history";
import { HistoryService } from "../../../timeline/services/history.service";

@Component({
  selector: "app-history-container",
  template: `
    <app-history-cards [history]="data$ | async"></app-history-cards>
  `,
  styles: [],
})
export class HistoryContainerComponent implements OnInit {
  data$: Observable<History>;
  isLoading = true;

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.data$ = this.historyService
      .getHistory()
      .pipe(map((history) => history));
  }
}
