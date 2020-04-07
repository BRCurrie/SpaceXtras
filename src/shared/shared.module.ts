import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReplacePipe } from "./pipes/replace.pipe";

@NgModule({
  declarations: [ReplacePipe],
  imports: [CommonModule],
  exports: [ReplacePipe],
  providers: [],
})
export class SharedModule {}
