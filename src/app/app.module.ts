import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";

// Angular Material Design & FontAwesome
import { MaterialDesignModule } from "../material-design/material-design.module";
import { SharedModule } from "../shared/shared.module";

// My Feature Modules
import { LaunchesModule } from "../launches/launches.module";
import { RoadsterModule } from "../roadster/roadster.module";
import { TimelineModule } from "../timeline/timeline.module";
import { DashboardModule } from "../dashboard/dashboard.module";
import { AboutModule } from "src/about/about.module";

// My Components
import { SidenavComponent } from "./components/sidenav/sidenav.component";

// EntryComponent
import { LaunchesModalComponent } from "../launches/components/launches-modal/launches-modal.component";

import { environment } from "src/environments/environment";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from "ngrx-store-freeze";

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

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
    AboutModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  entryComponents: [LaunchesModalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
