import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CdkTableModule } from "@angular/cdk/table";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// library currently does not work and is not available in components.
// because I am not reusing any icon in more than one component,
// I dont need to worry about it just yet.
// If I do decide to change this, I should probably make it a
// standalone feature module.

// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faBars,
//   faCheckCircle,
//   faNewspaper
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faGithub,
//   faReddit,
//   faWikipediaW
// } from "@fortawesome/free-brands-svg-icons";

// library.add(
//   faBars,
//   faGithub,
//   faCheckCircle,
//   faNewspaper,
//   faReddit,
//   faWikipediaW
// );

const modules: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatTableModule,
  CdkTableModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatStepperModule,
  MatRadioModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatSnackBarModule,
  FontAwesomeModule
];

// Declare Module that imports/exports the @angular/material modules needed in the app
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialDesignModule {}
