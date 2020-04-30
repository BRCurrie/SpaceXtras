import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

import { Launch } from "../../../shared/interfaces/launch";
import { JumboData } from "../../../shared/interfaces/jumboData";
import { Observable } from "rxjs";

@Component({
  selector: "app-launch-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-jumbotron [background]="bgImg" [pageData]="pageData"></app-jumbotron>
    <app-launches-table [launches]="data$ | async"></app-launches-table>
  `,
  styles: [],
})
export class LaunchContainerComponent implements OnInit {
  // class for the jumbotron
  bgImg: string = "launchesImage";

  // object for jumbotron
  pageData: JumboData = {
    title: "Missions",
    description:
      "SpaceX has undertaken missions to deploy commercial satellites, resupply the space station, and for research purposes.",
  };

  data$: Observable<Launch[]>;

  // TODO: need to add spinner if data is loading.

  constructor(private store: Store<fromStore.LaunchesFeatureState>) {}

  ngOnInit() {
    this.data$ = this.store.select(fromStore.getAllLaunches);
  }
}
