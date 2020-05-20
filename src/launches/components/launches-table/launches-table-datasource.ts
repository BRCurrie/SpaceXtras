import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

import { map } from "rxjs/operators";
import { Observable, of as observableOf, merge } from "rxjs";
import { Launch } from "../../../shared/interfaces/launch";

export class LaunchesTableDataSource extends DataSource<Launch> {
  data: Launch[];

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  connect(): Observable<Launch[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
    ];

    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  disconnect() {}

  private getPagedData(data: Launch[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Launch[]) {
    if (!this.sort.active || this.sort.direction === "") {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === "asc";
      switch (this.sort.active) {
        case "mission_name":
          return compare(a.mission_name, b.mission_name, isAsc);
        case "flight_number":
          return compare(+a.flight_number, +b.flight_number, isAsc);
        case "launch_date_local":
          return compare(a.launch_date_local, b.launch_date_local, isAsc);
        case "launch_success":
          return compare(a.launch_success, b.launch_success, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
