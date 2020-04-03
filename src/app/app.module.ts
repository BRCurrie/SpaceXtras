import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// This needs to be moved to feature module if it is kept.
import { MglTimelineModule } from "angular-mgl-timeline";

// Angular Material Design & FontAwesome
import { MaterialDesignModule } from "../material-design/material-design.module";

// My Feature Modules
import { LaunchesModule } from "../launches/launches.module";

// My Components
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { RoadsterComponent } from "./components/roadster/roadster.component";
// Need to reduce components to MVP and change to features.
import { TimelineComponent } from "./components/timeline/timeline.component";

// EntryComponent
import { LaunchesModalComponent } from "../launches/components/launches-modal/launches-modal.component";

// My Services
// Again reduce for MVP and move each to feature or shared folders
import { HistoryService } from "./services/history.service";
// import { LaunchService } from "./services/launch.service";
import { RoadsterService } from "./services/roadster.service";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    RoadsterComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MglTimelineModule,
    MaterialDesignModule,
    LaunchesModule
  ],
  entryComponents: [LaunchesModalComponent],
  providers: [HistoryService, RoadsterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
