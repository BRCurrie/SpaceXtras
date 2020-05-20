import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardContainerComponent } from "../dashboard/containers/dashboard-container/dashboard-container.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
    data: { animation: "Dashboard" },
  },
  {
    path: "dashboard",
    component: DashboardContainerComponent,
    data: { animation: "Dashboard" },
  },
  {
    path: "missions",
    loadChildren: () =>
      import("../launches/launches.module").then((m) => m.LaunchesModule),
  },
  {
    path: "roadster",
    loadChildren: () =>
      import("../roadster/roadster.module").then((m) => m.RoadsterModule),
  },
  {
    path: "timeline",
    loadChildren: () =>
      import("../timeline/timeline.module").then((m) => m.TimelineModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("../about/about.module").then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
