import { NgModule } from "@angular/core";

// Angular Material
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
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

// Font Awesome
import {
  FontAwesomeModule,
  FaIconLibrary,
} from "@fortawesome/angular-fontawesome";

import {
  faBars,
  faCheck,
  faNewspaper,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faReddit,
  faWikipediaW,
} from "@fortawesome/free-brands-svg-icons";

// module array for imports/exports
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
  MatSlideToggleModule,
  FontAwesomeModule,
];

// Declare Module that imports/exports the @angular/material modules needed in the app
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialDesignModule {
  constructor(library: FaIconLibrary) {
    // If icon pack is added instead of individual imports
    //  library.addIconPacks(fas);
    library.addIcons(
      faBars,
      faGithub,
      faCheck,
      faTimes,
      faNewspaper,
      faReddit,
      faWikipediaW,
      faChevronDown
    );
  }
}
