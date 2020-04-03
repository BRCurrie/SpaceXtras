import { OnInit, Component, ViewChild, OnDestroy } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatTableDataSource
} from "@angular/material";
import { LaunchService } from "../../services/launch.service";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { MatDialogConfig } from "@angular/material/dialog";
import { LaunchesModalComponent } from "../launches-modal/launches-modal.component";
import { Launch } from "../../interfaces/launch";

@Component({
  selector: "app-launches-table",
  templateUrl: "./launches-table.component.html",
  styleUrls: ["./launches-table.component.css"]
})
export class LaunchesTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<Launch>;
  isLoading = true;

  faCheckCircle = faCheckCircle;
  constructor(
    private launchService: LaunchService,
    private matDialog: MatDialog
  ) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "flight_number",
    "mission_name",
    "launch_date_local",
    "launch_success"
  ];

  // Pass data into the dialog/modal
  openDialog(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { launches: row };
    this.matDialog.open(LaunchesModalComponent, dialogConfig);
    // console.log(row);
  }

  // filterPredicate to search mission_name column only
  filterObj = {};
  applyFilter(event: Event, key: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterObj = {
      value: filterValue.trim().toLowerCase(),
      key: key
    };
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

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

  ngOnDestroy() {
    // this.dataSource.disconnect();
  }
}
