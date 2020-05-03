import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoadsterContainerComponent } from "./roadster-container.component";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";
import * as fromComponents from "../../components";
import { RoadsterService } from "src/roadster/services/roadster.service";

describe("RoadsterContainerComponent", () => {
  let component: RoadsterContainerComponent;
  let fixture: ComponentFixture<RoadsterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDesignModule, TestingModule, SharedModule],
      declarations: [RoadsterContainerComponent, ...fromComponents.components],
      providers: [RoadsterService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
