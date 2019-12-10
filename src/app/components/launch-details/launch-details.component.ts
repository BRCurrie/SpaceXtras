import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// Do I need the dataSource?
import { LaunchesTableDataSource } from "../launches-table/launches-table-datasource";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.scss"]
})
export class LaunchDetailsComponent implements OnInit {
  launch;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // This isn't right...
    // this.route.paramMap.subscribe(params => {
    //   this.launch = LaunchesTableDataSource[+params.get("launchId")];
    //   console.log(this.launch);
    // });
  }
}
