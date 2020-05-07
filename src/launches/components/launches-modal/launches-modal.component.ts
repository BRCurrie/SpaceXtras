import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: "app-launches-modal",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./launches-modal.component.html",
  styleUrls: ["./launches-modal.component.scss"],
})
export class LaunchesModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LaunchesModalComponent>,
    private breakpointObserver: BreakpointObserver
  ) {}

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(["(min-width: 768px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.dialogRef.updateSize("65%");
        }
      });
  }
}
