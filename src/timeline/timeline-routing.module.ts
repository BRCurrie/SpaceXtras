import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TimelineContainerComponent } from "./containers/timeline-container/timeline-container.component";
import * as fromGuards from "./guards";

const routes: Routes = [
  {
    path: "",
    canActivate: [fromGuards.TimelineGuard],
    component: TimelineContainerComponent,
    data: { animation: "Timeline" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelineRoutingModule {}
