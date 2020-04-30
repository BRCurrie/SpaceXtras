import { OnInit, Component, Input, ViewChild } from "@angular/core";

import {
  MatDialog,
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from "@angular/material";
import { MatDialogConfig } from "@angular/material/dialog";

import { LaunchesModalComponent } from "../launches-modal/launches-modal.component";

import { Launch } from "../../../shared/interfaces/launch";

@Component({
  selector: "app-launches-table",
  templateUrl: "./launches-table.component.html",
  styleUrls: ["./launches-table.component.scss"],
})
export class LaunchesTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input()
  dataSource: MatTableDataSource<Launch>;

  @Input()
  isLoading: boolean;

  @Input()
  launches: Launch[];

  constructor(private matDialog: MatDialog) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "mission_name",
    "flight_number",
    "launch_date_local",
    "launch_success",
  ];

  // Pass data into the dialog/modal
  openDialog(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { launches: row };
    this.matDialog.open(LaunchesModalComponent, dialogConfig);
  }

  // filterPredicate to search mission_name column only
  filterObj = {};
  applyFilter(event: Event, key: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterObj = {
      value: filterValue.trim().toLowerCase(),
      key: key,
    };
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  populateDataSource(launches) {
    return (this.dataSource.data = launches);
    // this.isLoading = false;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.populateDataSource(this.launches);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter) => {
      if (data[this.filterObj["key"]] && this.filterObj["key"]) {
        return data[this.filterObj["key"]]
          .toLowerCase()
          .includes(this.filterObj["value"]);
      }
      return false;
    };
  }
}
