import {
  OnInit,
  Component,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
} from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialogConfig } from "@angular/material/dialog";

import { LaunchesModalComponent } from "../launches-modal/launches-modal.component";

import { Launch } from "../../../shared/interfaces/launch";

@Component({
  selector: "app-launches-table",
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  displayedColumns = [
    "mission_name",
    "flight_number",
    "launch_date_local",
    "launch_success",
  ];

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
