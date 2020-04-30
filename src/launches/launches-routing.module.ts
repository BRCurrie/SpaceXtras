import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LaunchContainerComponent } from "./containers/launch-container/launch-container.component";

import * as fromGuards from "./guards";

const routes: Routes = [
  {
    path: "",
    canActivate: [fromGuards.LaunchesGuard],
    component: LaunchContainerComponent,
    data: { animation: "Launches" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesRoutingModule {}
