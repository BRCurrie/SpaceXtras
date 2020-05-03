import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardContainerComponent } from "./dashboard-container.component";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";
import * as fromComponents from "../../components";
// import { NextLaunchService } from "src/dashboard/services/next-launch.service";

describe("DashboardContainerComponent", () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDesignModule, TestingModule, SharedModule],
      declarations: [DashboardContainerComponent, ...fromComponents.components],
      // providers: [NextLaunchService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
