import { Component, OnInit, Input } from "@angular/core";
import { Launch } from "src/shared/interfaces/launch";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  @Input()
  nextLaunch: Launch;

  // current date
  date1: number;
  // launch_date_unix
  date2: number;

  // countDown() {
  //   this.date1 = Date.now();
  //   this.date2 = this.nextLaunch.launch_date_unix;
  //   let timeUntil = this.date2 - this.date1;
  //   console.log(this.date1);
  // }

  constructor() {}

  ngOnInit() {
    // this.countDown();
  }
}
