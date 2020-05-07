import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-loading-spinner",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./loading-spinner.component.html",
  styleUrls: ["./loading-spinner.component.scss"],
})
export class LoadingSpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
