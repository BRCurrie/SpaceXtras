import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LaunchesModalComponent } from "./launches-modal.component";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

describe("LaunchesModalComponent", () => {
  let component: LaunchesModalComponent;
  let fixture: ComponentFixture<LaunchesModalComponent>;
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
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesModalComponent);
    component = fixture.componentInstance;
    component.data = testData;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
