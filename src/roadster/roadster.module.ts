import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from "./store";

import { MaterialDesignModule } from "./../material-design/material-design.module";
import { SharedModule } from "./../shared/shared.module";

import { RoadsterRoutingModule } from "./roadster-routing.module";
import * as fromComponents from "./components";
import * as fromContainers from "./containers";
import * as fromGuards from "./guards";

import { RoadsterService } from "./services/roadster.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    SharedModule,
    RoadsterRoutingModule,
    StoreModule.forFeature("roadsterFeature", reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [RoadsterService, ...fromGuards.guards],
  declarations: [...fromComponents.components, ...fromContainers.components],
  exports: [...fromComponents.components, ...fromContainers.components],
})
export class RoadsterModule {}
