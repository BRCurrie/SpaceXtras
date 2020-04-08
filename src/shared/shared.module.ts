import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialDesignModule } from "src/material-design";

import * as fromComponents from "./components";

import { ReplacePipe } from "./pipes/replace.pipe";

@NgModule({
  declarations: [ReplacePipe, ...fromComponents.components],
  imports: [CommonModule, MaterialDesignModule],
  exports: [ReplacePipe, ...fromComponents.components],
  providers: [],
})
export class SharedModule {}
