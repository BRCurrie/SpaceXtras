import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialDesignModule } from "../material-design/material-design.module";
import { SharedModule } from "../shared/shared.module";

// import * as fromComponents from "./components";
import * as fromContainers from "./containers";
import { HistoryCardsComponent } from "./components/history-cards/history-cards.component";

@NgModule({
  imports: [CommonModule, MaterialDesignModule, SharedModule],
  providers: [],
  declarations: [
    HistoryCardsComponent,
    // ...fromComponents.components,
    ...fromContainers.components,
  ],

  exports: [
    HistoryCardsComponent,
    // ...fromComponents.components,
    ...fromContainers.components,
  ],
})
export class HistoryModule {}
