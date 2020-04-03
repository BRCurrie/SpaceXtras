import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoadsterComponent } from "./components/roadster/roadster.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { LaunchContainerComponent } from "../launches/containers/launch-container/launch-container.component";

// add home/dashboard component. redirectTo if ''
const routes: Routes = [
  { path: "roadster", component: RoadsterComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "launches", component: LaunchContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
