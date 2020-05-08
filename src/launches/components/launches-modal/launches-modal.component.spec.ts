import { NgModule, Component } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { LaunchesModalComponent } from "./launches-modal.component";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
  MatDialogModule,
} from "@angular/material/dialog";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("LaunchesModalComponent", () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;

  let noop: ComponentFixture<NoopComponent>;

  // in the constructor
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

  @Component({
    template: "",
  })
  class NoopComponent {}

  const TEST_DIRECTIVES = [LaunchesModalComponent, NoopComponent];

  @NgModule({
    imports: [NoopAnimationsModule],
    exports: TEST_DIRECTIVES,
    declarations: TEST_DIRECTIVES,
    entryComponents: [LaunchesModalComponent],
  })
  class DialogTestModule {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialDesignModule,
        TestingModule,
        SharedModule,
        DialogTestModule,
      ],
      providers: [
        {
          provide: OverlayContainer,
          useFactory: () => {
            overlayContainerElement = document.createElement("div");
            return { getContainerElement: () => overlayContainerElement };
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    noop = TestBed.createComponent(NoopComponent);
    const config = {
      data: testData[0],
    };

    dialog.open(LaunchesModalComponent, config);
    noop.detectChanges();
  });

  it("should create", () => {
    expect(noop).toBeTruthy();
  });

  // TODO:
  // *ngIf core.landing, payload.mass, payload.mass_returned, payload.cargo_manifest

  // data should be binded from provided values
  // it("should bind data to @inject data ", () => {
  // });

  it("should populate the title from injected data", () => {
    const el = overlayContainerElement.querySelector("h2");
    // expect(el.textContent).toContain(testData[0].launches.mission_name);
    expect(el.textContent).toContain("MISSION NAME");
  });

  it("should populate the rocket_name from injected data and | titleCase", () => {
    const el = overlayContainerElement.querySelector("mat-dialog-content");
    expect(el.textContent).toContain("Rocket Name");
  });

  it("should populate the flight_number from injected data", () => {
    const el = overlayContainerElement.querySelector("mat-dialog-content");
    expect(el.textContent).toContain("1");
  });

  it("should populate the launch_date_local from injected data and | date", () => {
    const el = overlayContainerElement.querySelector("mat-dialog-content");
    expect(el.textContent).toContain("March 24, 2006");
  });

  it("should populate the launch_site_name_long from injected data", () => {
    const el = overlayContainerElement.querySelector("mat-dialog-content");
    expect(el.textContent).toContain("SITE NAME");
  });

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

  // tabs don't seem to be rendering / correct when testing...

  // it("should have 2 tabs, payload and cores", () => {
  //   // <mat-tab-label-content>
  //   const el = overlayContainerElement.querySelector("mat-tab-header");
  //   // let el = noop.debugElement.query(By.css(".mat-tab-label-content"));

  //   expect(el.textContent).toContain("Cores");
  // });

  // it("should populate the core_serial from injected data", () => {
  //   const el = overlayContainerElement.querySelector("li");
  //   expect(el.textContent).toContain("SERIAL 1");
  // });

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
