import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";

import { RoadsterComponent } from "./roadster.component";
import { Roadster } from "../../interfaces/roadster";

describe("RoadsterComponent", () => {
  let component: RoadsterComponent;
  let fixture: ComponentFixture<RoadsterComponent>;

  let testData: Roadster = {
    name: "Elon Musk's Tesla Roadster",
    launch_date_utc: "2018-02-06T20:45:00.000Z",
    launch_date_unix: 1517949900,
    launch_mass_kg: 1350,
    launch_mass_lbs: 2976,
    norad_id: 43205,
    epoch_jd: 2458366.482893519,
    orbit_type: "heliocentric",
    apoapsis_au: 1.663752666195018,
    periapsis_au: 0.9860753850280967,
    semi_major_axis_au: 137.6352649527045,
    eccentricity: 0.2557438701934329,
    inclination: 1.077489463372395,
    longitude: 317.0956890012447,
    periapsis_arg: 177.4902539777412,
    period_days: 557.0317797709337,
    speed_kph: 75139.344,
    speed_mph: 46689.409320624,
    earth_distance_km: 194902757.14697537,
    earth_distance_mi: 121106921.11117323,
    mars_distance_km: 159204213.85950035,
    mars_distance_mi: 98924881.57009159,
    wikipedia: "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
    details:
      "Elon Musk's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX, both companies founded by Elon Musk. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space.",
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialDesignModule,
        TestingModule,
        SharedModule,
        NoopAnimationsModule,
      ],
      declarations: [RoadsterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsterComponent);
    component = fixture.componentInstance;
    component.roadster = testData;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create the header card with expected title.", () => {
    let el = fixture.nativeElement.querySelector("mat-card-title");
    expect(el.textContent).toContain(testData.name);
  });

  it("should display the date of the launch", () => {
    let el = fixture.nativeElement.querySelector(".launched");
    expect(el.textContent).toContain("launched on 2/6/18 and");
  });

  it("should display the number of days in flight", () => {
    let el = fixture.nativeElement.querySelector(".launched");
    expect(el.textContent).toContain("space for 557 days");
  });

  it("should display the details of the launch", () => {
    let el = fixture.nativeElement.querySelector(".details");
    expect(el.textContent).toContain(testData.details);
  });

  it("should display the speed", () => {
    let el = fixture.nativeElement.querySelector(".travel");
    expect(el.textContent).toContain("at 46,689 mph.");
  });

  it("should display the miles to earth", () => {
    let el = fixture.nativeElement.querySelector(".travel");
    expect(el.textContent).toContain("is 121,106,921 miles from Earth");
  });

  it("should display the miles to mars", () => {
    let el = fixture.nativeElement.querySelector(".travel");
    expect(el.textContent).toContain("and 98,924,882 miles from Mars");
  });
});
