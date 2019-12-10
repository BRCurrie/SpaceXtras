import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CapsulesComponent } from "./components/capsules/capsules.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RoadsterComponent } from "./components/roadster/roadster.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { LaunchesTableComponent } from "./components/launches-table/launches-table.component";
import { MapComponent } from "./components/map/map.component";
import { AboutComponent } from "./components/about/about.component";
import { LaunchDetailsComponent } from "./components/launch-details/launch-details.component";

const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "capsules", component: CapsulesComponent },
  { path: "roadster", component: RoadsterComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "launches", component: LaunchesTableComponent },
  { path: "map", component: MapComponent },
  { path: "about", component: AboutComponent },
  // add launch-details routing. Double check Angular routing
  { path: "launches/:launchID", component: LaunchDetailsComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
