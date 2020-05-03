import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoadsterComponent } from "./roadster.component";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";

describe("RoadsterComponent", () => {
  let component: RoadsterComponent;
  let fixture: ComponentFixture<RoadsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDesignModule, TestingModule, SharedModule],
      declarations: [RoadsterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
