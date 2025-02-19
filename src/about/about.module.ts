import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialDesignModule } from "./../material-design/material-design.module";
import { SharedModule } from "./../shared/shared.module";

import { AboutRoutingModule } from "./about-routing.module";
import * as fromComponents from "./components";
import * as fromContainers from "./containers";

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    SharedModule,
    AboutRoutingModule,
  ],
  declarations: [...fromComponents.components, ...fromContainers.components],
  exports: [...fromComponents.components, ...fromContainers.components],
})
export class AboutModule {}
