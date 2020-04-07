import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoadsterContainerComponent } from "../roadster/containers/roadster-container/roadster-container.component";
import { TimelineContainerComponent } from "../timeline/containers/timeline-container/timeline-container.component";
import { LaunchContainerComponent } from "../launches/containers/launch-container/launch-container.component";

// add home/dashboard component. redirectTo if ''
const routes: Routes = [
  { path: "roadster", component: RoadsterContainerComponent },
  { path: "timeline", component: TimelineContainerComponent },
  { path: "launches", component: LaunchContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
