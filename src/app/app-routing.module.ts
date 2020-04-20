import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoadsterContainerComponent } from "../roadster/containers/roadster-container/roadster-container.component";
import { TimelineContainerComponent } from "../timeline/containers/timeline-container/timeline-container.component";
import { LaunchContainerComponent } from "../launches/containers/launch-container/launch-container.component";
import { DashboardContainerComponent } from "../dashboard/containers/dashboard-container/dashboard-container.component";

const routes: Routes = [
  //Original
  {
    path: "dashboard",
    component: DashboardContainerComponent,
    data: { animation: "Dashboard" },
  },
  {
    path: "roadster",
    component: RoadsterContainerComponent,
    data: { animation: "Roadster" },
  },
  {
    path: "timeline",
    component: TimelineContainerComponent,
    data: { animation: "Timeline" },
  },
  {
    path: "launches",
    component: LaunchContainerComponent,
    data: { animation: "Launches" },
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
    data: { animation: "Dashboard" },
  },
  // Lazy Loading Modules
  // {
  //   path: "launches",
  //   loadChildren: () =>
  //     import("../launches/launches.module").then((m) => m.LaunchesModule),
  //   data: { animation: "Launches" },
  // },
  // {
  //   path: "roadster",
  //   loadChildren: () =>
  //     import("../roadster/roadster.module").then((m) => m.RoadsterModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
