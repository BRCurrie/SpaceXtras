import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-dashboard-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <app-dashboard></app-dashboard> `,
  styles: [],
})
export class DashboardContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
