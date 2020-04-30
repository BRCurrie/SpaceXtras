import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers, effects } from "./store";

import { MaterialDesignModule } from "../material-design/material-design.module";
import { SharedModule } from "../shared/shared.module";

import { MglTimelineModule } from "angular-mgl-timeline";

import { TimelineRoutingModule } from "./timeline-routing.module";
import * as fromComponents from "./components";
import * as fromContainers from "./containers";
import * as fromGuards from "./guards";

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    SharedModule,
    MglTimelineModule,
    TimelineRoutingModule,
    StoreModule.forFeature("timelineFeature", reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [...fromGuards.guards],
  declarations: [...fromComponents.components, ...fromContainers.components],
  exports: [...fromComponents.components, ...fromContainers.components],
})
export class TimelineModule {}
