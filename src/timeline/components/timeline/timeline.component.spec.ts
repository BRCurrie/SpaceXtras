import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { TimelineComponent } from "./timeline.component";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";
import { MglTimelineModule } from "angular-mgl-timeline";

import { History } from "../../interfaces/history";
import { mockEvent } from "src/testing/mock-events";

describe("TimelineComponent", () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  let testData: History[] = [mockEvent];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialDesignModule,
        TestingModule,
        SharedModule,
        MglTimelineModule,
        NoopAnimationsModule,
      ],
      declarations: [TimelineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    component.history = testData;
    fixture.detectChanges();
  });

  // TODO:
  // *ngIf for no reddit, wiki, article, and flight number

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create the card with expected title.", () => {
    let el = fixture.nativeElement.querySelector("mat-card-title");
    expect(el.textContent).toContain("Major Events");
  });

  it("should display the date in timeline-header", () => {
    let el = fixture.nativeElement.querySelector("mgl-timeline-entry-header");
    expect(el.textContent).toContain("February 6, 2018");
  });

  it("should display the title in h3", () => {
    let el = fixture.nativeElement.querySelector("h3");
    expect(el.textContent).toContain(testData[0].title);
  });

  it("should display the flight number if present", () => {
    let el = fixture.nativeElement.querySelector("mgl-timeline-entry-content");
    expect(el.textContent).toContain(testData[0].flight_number);
  });

  it("should display the details in content", () => {
    let el = fixture.nativeElement.querySelector("mgl-timeline-entry-content");
    expect(el.textContent).toContain(testData[0].details);
  });

  it("should display reddit icon if link is present", () => {
    expect(fixture.nativeElement.querySelector(".reddit")).toBeTruthy();
  });

  it("should display newspaper icon if link is present", () => {
    expect(fixture.nativeElement.querySelector(".newspaper")).toBeTruthy();
  });

  it("should display wikipedia icon if link is present", () => {
    expect(fixture.nativeElement.querySelector(".wikipedia")).toBeTruthy();
  });
});
