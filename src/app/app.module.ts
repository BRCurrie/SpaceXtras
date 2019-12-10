import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MglTimelineModule } from "angular-mgl-timeline";

// Angular Material, FontAwesome located in shared
import { SharedModule } from "./shared";

// Store
import { StoreModule } from "@ngrx/store";

// My Components
import { CapsulesComponent } from "./components/capsules/capsules.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RoadsterComponent } from "./components/roadster/roadster.component";
import { LaunchDetailsComponent } from "./components/launch-details/launch-details.component";
import { AboutComponent } from "./components/about/about.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { LaunchesTableComponent } from "./components/launches-table/launches-table.component";
import { MapComponent } from "./components/map/map.component";

// My Services
import { CapsulesService } from "./services/capsules.service";
import { HistoryService } from "./services/history.service";
import { LaunchService } from "./services/launch.service";
import { LaunchpadService } from "./services/launchpad.service";
import { RoadsterService } from "./services/roadster.service";
// import {  } from "./services";

@NgModule({
  declarations: [
    AppComponent,
    CapsulesComponent,
    SidenavComponent,
    DashboardComponent,
    RoadsterComponent,
    LaunchDetailsComponent,
    AboutComponent,
    TimelineComponent,
    LaunchesTableComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MglTimelineModule,
    // provide an empty state so our feature modules can be loaded in later
    StoreModule.forRoot({})
  ],
  providers: [
    CapsulesService,
    HistoryService,
    LaunchService,
    LaunchpadService,
    RoadsterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
