import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CdkTableModule } from "@angular/cdk/table";
import { LayoutModule } from "@angular/cdk/layout";

import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";

// npm install --save
// @fortawesome/fontawesome-svg-core
//  @fortawesome/free-solid-svg-icons
// # See Compatibility table below to choose correct version
// @fortawesome/angular-fontawesome@<version>
// 0.3.x for angular	6.x && 7.x
// 0.4.x, 0.5.x for angular 	8.x
// @fortawesome/free-brands-svg-icons

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCheckCircle,
  faNewspaper
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faReddit,
  faWikipediaW
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faGithub,
  faCheckCircle,
  faNewspaper,
  faReddit,
  faWikipediaW
);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule
  ],
  exports: [
    FontAwesomeModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule
  ]
})
export class SharedModule {}
