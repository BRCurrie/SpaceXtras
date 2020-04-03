import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialDesignModule } from "../material-design/material-design.module";
import { SharedModule } from "../shared/shared.module";

import * as fromComponents from "./components";
import * as fromContainers from "./containers";

import { LaunchService } from "../launches/services/launch.service";

@NgModule({
  imports: [CommonModule, MaterialDesignModule, SharedModule],
  providers: [LaunchService],
  // added launches-dialog component to entryComponents in app.module
  declarations: [...fromComponents.components, ...fromContainers.components],
  exports: [...fromComponents.components, ...fromContainers.components]
})
export class LaunchesModule {}
