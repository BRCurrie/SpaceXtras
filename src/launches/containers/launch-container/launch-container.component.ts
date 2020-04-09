import { Component, OnInit } from "@angular/core";

import { MatTableDataSource } from "@angular/material";

import { LaunchService } from "../../services/launch.service";

import { Launch } from "../../../shared/interfaces/launch";

@Component({
  selector: "app-launch-container",
  template: `
    <app-loading-spinner *ngIf="isLoading; else table"> </app-loading-spinner>
    <ng-template #table>
      <app-launches-table [dataSource]="dataSource"></app-launches-table>
    </ng-template>
  `,
  styles: [],
})
export class LaunchContainerComponent implements OnInit {
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
