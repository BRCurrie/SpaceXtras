import { OnInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { LaunchesTableDataSource } from "./launches-table-datasource";
import { LaunchService } from "src/app/services/launch.service";
import { Launch } from "../../interfaces/launch/launch";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Setup LaunchService to retrieve the data so the functions can be used here.
//  AfterViewInit does not work to load data. Need more info on this.

@Component({
  selector: "app-launches-table",
  templateUrl: "./launches-table.component.html",
  styleUrls: ["./launches-table.component.css"]
})
export class LaunchesTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: LaunchesTableDataSource;
  faCheckCircle = faCheckCircle;
  constructor(private launchService: LaunchService) {}

  getAllLaunches() {
    this.launchService.getAllLaunches().subscribe((data: Launch[]) => {
      this.dataSource.data = data;
      return data;
    });
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "flight_number",
    "mission_name",
    "launch_date_local",
    "launch_success"
  ];

  ngOnInit() {
    this.getAllLaunches();
    this.dataSource = new LaunchesTableDataSource(this.paginator, this.sort);
  }
}
