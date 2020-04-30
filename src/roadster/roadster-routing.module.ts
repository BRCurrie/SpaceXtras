import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RoadsterContainerComponent } from "./containers/roadster-container/roadster-container.component";
import * as fromGuards from "./guards";

const routes: Routes = [
  {
    path: "",
    canActivate: [fromGuards.RoadsterGuard],
    component: RoadsterContainerComponent,
    data: { animation: "Roadster" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadsterRoutingModule {}
