import { Component, Input, OnInit } from "@angular/core";

import { Roadster } from "../../interfaces/roadster";

@Component({
  selector: "app-roadster",
  templateUrl: "./roadster.component.html",
  styleUrls: ["./roadster.component.scss"],
})
export class RoadsterComponent implements OnInit {
  @Input()
  roadster: Roadster;

  constructor() {}

  ngOnInit() {}
}
