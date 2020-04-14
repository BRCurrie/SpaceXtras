import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoadsterContainerComponent } from "../roadster/containers/roadster-container/roadster-container.component";
import { TimelineContainerComponent } from "../timeline/containers/timeline-container/timeline-container.component";
import { LaunchContainerComponent } from "../launches/containers/launch-container/launch-container.component";
import { DashboardContainerComponent } from "../dashboard/containers/dashboard-container/dashboard-container.component";
// import { HistoryContainerComponent } from "../history/containers/history-container/history-container.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardContainerComponent },
  { path: "roadster", component: RoadsterContainerComponent },
  {
    path: "timeline",
    component: TimelineContainerComponent,
    // HistoryContainerComponent,
  },
  { path: "launches", component: LaunchContainerComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
