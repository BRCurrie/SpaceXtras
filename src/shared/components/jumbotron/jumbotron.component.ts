import { Component, OnInit, Input } from "@angular/core";

import { JumboData } from "../../interfaces/jumboData";

@Component({
  selector: "app-jumbotron",
  templateUrl: "./jumbotron.component.html",
  styleUrls: ["./jumbotron.component.scss"],
})
export class JumbotronComponent implements OnInit {
  @Input()
  background: string;

  @Input()
  pageData: JumboData;

  bgClass() {
    return {};
  }

  constructor() {}

  ngOnInit() {}
}
