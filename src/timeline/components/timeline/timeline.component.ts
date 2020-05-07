import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { History } from "../../interfaces/history";

@Component({
  selector: "app-timeline",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  @Input()
  history: History[];

  ngOnInit() {}
}
