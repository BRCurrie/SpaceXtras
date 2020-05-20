import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

import { Observable } from "rxjs";
import { Launch } from "../../../shared/interfaces/launch";

@Component({
  selector: "app-next-launch-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <app-next-launch [nextLaunch]="data$ | async"></app-next-launch>`,
  styles: [],
})
export class NextLaunchContainerComponent implements OnInit {
  data$: Observable<Launch[]>;

  constructor(private store: Store<fromStore.DashboardFeatureState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadNextLaunch());
    this.data$ = this.store.select(fromStore.getNextLaunch);
  }
}
