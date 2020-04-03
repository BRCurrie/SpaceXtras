import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-launch-container",
  template: `
    <app-launches-table></app-launches-table>
  `,
  styles: []
})
export class LaunchContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
