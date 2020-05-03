import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialDesignModule } from "src/material-design";

import * as fromComponents from "./components";

// Pipes
import { ReplacePipe } from "./pipes/replace.pipe";
import { OrbitTypePipe } from "./pipes/orbitType.pipe";
import { HttpService } from "./services/http/http.service";

@NgModule({
  declarations: [ReplacePipe, OrbitTypePipe, ...fromComponents.components],
  imports: [CommonModule, MaterialDesignModule],
  exports: [ReplacePipe, OrbitTypePipe, ...fromComponents.components],
  providers: [HttpService],
})
export class SharedModule {}
