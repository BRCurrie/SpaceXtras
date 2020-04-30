import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers, effects } from "./store";

import { MaterialDesignModule } from "../material-design/material-design.module";
import { SharedModule } from "../shared/shared.module";

import { LaunchesRoutingModule } from "./launches-routing.module";
import * as fromComponents from "./components";
import * as fromContainers from "./containers";
import * as fromGuards from "./guards";

import { LaunchService } from "./services/launch.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    SharedModule,
    LaunchesRoutingModule,
    StoreModule.forFeature("launchesFeature", reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [LaunchService, ...fromGuards.guards],
  // added launches-dialog component to entryComponents in app.module
  declarations: [...fromComponents.components, ...fromContainers.components],
  exports: [...fromComponents.components, ...fromContainers.components],
})
export class LaunchesModule {}
