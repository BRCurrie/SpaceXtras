import { Component, OnInit } from "@angular/core";

import { MatTableDataSource } from "@angular/material";

import { LaunchService } from "../../services/launch.service";

import { Launch } from "../../../shared/interfaces/launch";
import { JumboData } from "../../../shared/interfaces/jumboData";

@Component({
  selector: "app-launch-container",
  template: `
    <app-jumbotron [background]="bgImg" [pageData]="pageData"></app-jumbotron>
    <app-loading-spinner *ngIf="isLoading; else table"> </app-loading-spinner>
    <ng-template #table>
      <app-launches-table [dataSource]="dataSource"></app-launches-table>
    </ng-template>
  `,
  styles: [],
})
export class LaunchContainerComponent implements OnInit {
  // class for the jumbotron
  bgImg: string = "launchesImage";

  // object for jumbotron
  pageData: JumboData = {
    title: "Missions",
    description:
      "SpaceX has undertaken missions to deploy commercial satellites, resupply the space station, and for research purposes.",
  };

  dataSource: MatTableDataSource<Launch>;

  isLoading = true;

  constructor(private launchService: LaunchService) {}

  getAllLaunches() {
    this.launchService.getAllLaunches().subscribe((data: Launch[]) => {
      this.dataSource.data = data;
      this.isLoading = false;
      return data;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getAllLaunches();
  }
}
