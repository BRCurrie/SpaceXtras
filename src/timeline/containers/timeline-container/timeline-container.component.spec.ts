import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TimelineContainerComponent } from "./timeline-container.component";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";
import { MglTimelineModule } from "angular-mgl-timeline";
import * as fromComponents from "../../components";
import { HistoryService } from "src/timeline/services/history.service";

describe("TimelineContainerComponent", () => {
  let component: TimelineContainerComponent;
  let fixture: ComponentFixture<TimelineContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialDesignModule,
        TestingModule,
        SharedModule,
        MglTimelineModule,
      ],
      declarations: [TimelineContainerComponent, ...fromComponents.components],
      providers: [HistoryService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
