import { Component, Input } from "@angular/core";
import { Roadster } from "../../interfaces/roadster";

@Component({
  selector: "app-roadster",
  templateUrl: "./roadster.component.html",
  styleUrls: ["./roadster.component.scss"],
})
export class RoadsterComponent {
  @Input()
  roadster: Roadster;

  constructor() {}
}
