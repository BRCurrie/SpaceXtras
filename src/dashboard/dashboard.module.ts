import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialDesignModule } from "../material-design/material-design.module";
import { SharedModule } from "../shared/shared.module";

import * as fromComponents from "./components";
import * as fromContainers from "./containers";

import { NextLaunchService } from "./services/next-launch.service";

@NgModule({
  imports: [CommonModule, MaterialDesignModule, SharedModule],
  providers: [NextLaunchService],
  declarations: [...fromComponents.components, ...fromContainers.components],
  exports: [...fromComponents.components, ...fromContainers.components],
})
export class DashboardModule {}
