import { Component, OnInit, Input } from "@angular/core";
import { Launch } from "src/shared/interfaces/launch";

@Component({
  selector: "app-next-launch",
  templateUrl: "./next-launch.component.html",
  styleUrls: ["./next-launch.component.scss"],
})
export class NextLaunchComponent implements OnInit {
  @Input()
  nextLaunch: Launch;

  today: number;

  public lessThan24Hours(subj: number, num: number) {
    return subj < num;
  }

  ngOnInit(): void {
    this.today = Date.now() / 1000;
  }
}
