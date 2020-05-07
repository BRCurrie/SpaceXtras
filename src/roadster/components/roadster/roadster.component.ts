import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { Roadster } from "../../interfaces/roadster";

@Component({
  selector: "app-roadster",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./roadster.component.html",
  styleUrls: ["./roadster.component.scss"],
})
export class RoadsterComponent {
  @Input()
  roadster: Roadster;
}
