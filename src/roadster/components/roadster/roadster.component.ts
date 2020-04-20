import { Component, Input, OnInit } from "@angular/core";

import { Roadster } from "../../interfaces/roadster";

import { ScrollPositionService } from "../../../shared/services/scroll-position.service";

// import { ScrollDispatcher } from "@angular/cdk/scrolling";
// import { CdkScrollable } from "@angular/cdk/scrolling";

@Component({
  selector: "app-roadster",
  templateUrl: "./roadster.component.html",
  styleUrls: ["./roadster.component.scss"],
})
export class RoadsterComponent implements OnInit {
  @Input()
  roadster: Roadster;

  @Input()
  scrollRatio;

  constructor(
    private scroll: ScrollPositionService // private scroll2: ScrollDispatcher,
  ) // private cdk: CdkScrollable
  {}

  // offset = this.cdk.measureScrollOffset("top");

  getPosition() {
    console.log(this.scrollRatio);
    return this.scrollRatio;
  }

  click() {
    console.log(this.scrollRatio);
  }

  ngOnInit() {
    this.scroll.data.subscribe(
      (scrollRatio) => (this.scrollRatio = scrollRatio)
    );
    console.log(this.scrollRatio);

    //   this.scroll2
    //     .scrolled()
    //     .subscribe((scrollRatio) => (this.scrollRatio = scrollRatio));
  }
}
