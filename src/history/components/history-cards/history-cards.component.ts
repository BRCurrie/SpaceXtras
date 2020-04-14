import { Component, OnInit, Input } from "@angular/core";

import { HistoryService } from "../../../timeline/services/history.service";

@Component({
  selector: "app-history-cards",
  templateUrl: "./history-cards.component.html",
  styleUrls: ["./history-cards.component.scss"],
})
export class HistoryCardsComponent implements OnInit {
  @Input()
  history: History;

  constructor(private historyService: HistoryService) {}

  getHistory() {
    this.historyService.getHistory().subscribe((history) => history);
  }

  ngOnInit() {
    // this.data$ = this.historyService
    // .getHistory()
    // .pipe(map((history) => history));
    // this.getHistory();
  }
}
