import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutContainerComponent } from "./containers/about-container/about-container.component";

const routes: Routes = [
  {
    path: "",
    component: AboutContainerComponent,
    data: { animation: "About" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
