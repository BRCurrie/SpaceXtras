import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";

import { RoadsterComponent } from "./roadster.component";
import { Roadster } from "../../interfaces/roadster";

import { mockRoadster } from "../../../testing/mock-roadster";

describe("RoadsterComponent", () => {
  let component: RoadsterComponent;
  let fixture: ComponentFixture<RoadsterComponent>;

  let testData: Roadster = mockRoadster;

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
    expect(el.textContent).toContain("launched on 2/6/18");
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
