import { Component, ViewChild, OnInit } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { CapsulesDataSource } from "./capsules-datasource";
import { CapsulesService } from "src/app/services/capsules.service";
import { Capsules } from "../../interfaces/capsules";

@Component({
  selector: "app-capsules",
  templateUrl: "./capsules.component.html",
  styleUrls: ["./capsules.component.css"]
})
export class CapsulesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: CapsulesDataSource;

  constructor(private capsulesService: CapsulesService) {}

  getAllCapsules() {
    this.capsulesService.getCapsulesApi().subscribe((data: Capsules[]) => {
      this.dataSource.data = data; // on data receive populate dataSource.data array
      return data;
    });
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["capsule_serial", "capsule_id"];

  ngOnInit() {
    this.getAllCapsules();
    this.dataSource = new CapsulesDataSource(this.paginator, this.sort);
  }
}
