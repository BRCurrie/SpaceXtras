import { Component, OnInit } from "@angular/core";
import { HistoryService } from "src/app/services/history.service";
import { History } from "../../interfaces/history";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faReddit, faWikipediaW } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit {
  constructor(private historyService: HistoryService) {}
  history: History[];
  // FontAwesome
  faReddit = faReddit;
  faNewspaper = faNewspaper;
  faWikipediaW = faWikipediaW;

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.historyService
      .getHistoryApi()
      .subscribe(history => (this.history = history));
  }
}
