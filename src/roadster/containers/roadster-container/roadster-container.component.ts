import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Roadster } from "../../interfaces/roadster";
import { RoadsterService } from "../../services/roadster.service";

@Component({
  selector: "app-roadster-container",
  template: ` <app-roadster [roadster]="data$ | async"></app-roadster> `,
  styles: [],
})
export class RoadsterContainerComponent implements OnInit {
  data$: Observable<Roadster>;

  constructor(private roadsterService: RoadsterService) {}

  ngOnInit() {
    this.data$ = this.roadsterService
      .getRoadster()
      .pipe(map((roadster) => roadster));
  }
}
