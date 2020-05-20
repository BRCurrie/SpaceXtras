import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CountdownModule } from "ngx-countdown";

import { MaterialDesignModule } from "../material-design/material-design.module";
import { SharedModule } from "../shared/shared.module";

import { reducers, effects } from "./store";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import * as fromComponents from "./components";
import * as fromContainers from "./containers";

import { NextLaunchService } from "./services/next-launch.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    SharedModule,
    DashboardRoutingModule,
    CountdownModule,
    StoreModule.forFeature("dashboardFeature", reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [NextLaunchService],
  declarations: [...fromComponents.components, ...fromContainers.components],
  exports: [...fromComponents.components, ...fromContainers.components],
})
export class DashboardModule {}
