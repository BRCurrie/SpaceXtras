import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Angular Material Design & FontAwesome
import { MaterialDesignModule } from "../material-design/material-design.module";
import { SharedModule } from "../shared/shared.module";

// My Feature Modules
import { LaunchesModule } from "../launches/launches.module";
import { RoadsterModule } from "../roadster/roadster.module";
import { TimelineModule } from "../timeline/timeline.module";
import { DashboardModule } from "../dashboard/dashboard.module";

// My Components
import { SidenavComponent } from "./components/sidenav/sidenav.component";

// EntryComponent
import { LaunchesModalComponent } from "../launches/components/launches-modal/launches-modal.component";

@NgModule({
  declarations: [AppComponent, SidenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialDesignModule,
    SharedModule,
    LaunchesModule,
    RoadsterModule,
    TimelineModule,
    DashboardModule,
  ],
  entryComponents: [LaunchesModalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
