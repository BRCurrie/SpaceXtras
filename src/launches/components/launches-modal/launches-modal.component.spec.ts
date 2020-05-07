import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LaunchesModalComponent } from "./launches-modal.component";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from "@angular/material/dialog";

describe("LaunchesModalComponent", () => {
  let component: LaunchesModalComponent;
  let fixture: ComponentFixture<LaunchesModalComponent>;
  let dialog;
  // in the constructor
  // @Inject(MAT_DIALOG_DATA) public data: any,
  // public dialogRef: MatDialogRef<LaunchesModalComponent>,
  // private breakpointObserver: BreakpointObserver
  // min-width of 768 px update size to 65%
  // close() button     this.dialogRef.close();

  let testData = [
    {
      launches: {
        mission_name: "MISSION NAME",
        flight_number: 1,
        launch_date_local: "2006-03-25T10:30:00+12:00",
        details: "DETAILS",
        launch_site: {
          site_name_long: "SITE NAME",
        },
        rocket: {
          rocket_name: "ROCKET NAME",
          first_stage: {
            cores: {
              serial: "SERIAL1",
              flight: 2,
              reused: true,
              landing_intent: true,
              land_success: true,
              landing_type: "TEST LT",
              landing_vehicle: "TEST LV",
            },
          },
          second_stage: {
            payloads: {
              payload_id: "PAYLOAD ID",
              payload_type: "SATELLITE",
              orbit: "ORBIT",
              payload_mass_kg: 3,
              mass_returned_kg: 4,
              nationality: "NATIONALITY",
              manufacturer: "MANUFACTURER",
              customers: ["CUSTOMER"],
              cargo_manifest: "MANIFEST",
            },
          },
        },
      },
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDesignModule, TestingModule, SharedModule],
      declarations: [LaunchesModalComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: testData },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesModalComponent);
    // dialog = TestBed.get(MAT_DIALOG_DATA);

    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = { launches: testData };
    component = fixture.componentInstance;
    component.data = testData;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // TODO:
  // data should be binded from provided values
  // *ngIf core.landing, payload.mass, payload.mass_returned, payload.cargo_manifest

  // .mat-dialog-title{{ data.launches.mission_name }}
  // <mat-dialog-content>
  // rocket.rocket_name | titlecase }}
  // flight_number
  // launch_date_local | date: "longDate"
  // launch_site.site_name_long

  // <mat-tab-group>
  // <mat-tab label="Cores"
  // core_serial
  // flight
  // reused
  // landing_intent
  // landing_success
  // landing_type
  // landing_vehicle
  // #noLanding

  // <mat-tab label="Payload"
  // payload_id
  // payload_type
  // orbit_type | orbitType
  // payload_mass_kg
  // payload_mass_returned_kg
  // nationality
  // manufacturer
  // payload.customers.toString() | replace
  // cargo_manifest button

  // close() button
});
