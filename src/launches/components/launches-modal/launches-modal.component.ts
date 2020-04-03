import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-launches-modal",
  templateUrl: "./launches-modal.component.html",
  styleUrls: ["./launches-modal.component.scss"]
})
export class LaunchesModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LaunchesModalComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
