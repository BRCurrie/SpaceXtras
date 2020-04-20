import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RoadsterContainerComponent } from "./containers/roadster-container/roadster-container.component";
import { RoadsterComponent } from "./components";

const routes: Routes = [
  {
    path: "",
    component: RoadsterContainerComponent,
    data: { animation: "Roadster" },

    // children: [
    //   {
    //     path: "1",
    //     component: RoadsterComponent,
    //     data: { animation: "Roadster" },
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadsterRoutingModule {}
