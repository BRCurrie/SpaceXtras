import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import {
  provideMockStore,
  // MockStore
} from "@ngrx/store/testing";
import { By } from "@angular/platform-browser";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";
import { MglTimelineModule } from "angular-mgl-timeline";
// import { TimelineState } from "src/timeline/store/reducers/events.reducer";

import { TimelineContainerComponent } from "./timeline-container.component";
import * as fromComponents from "../../components";
import { History } from "../../interfaces/history";

describe("TimelineContainerComponent", () => {
  let component: TimelineContainerComponent;
  let fixture: ComponentFixture<TimelineContainerComponent>;
  // let store: MockStore<TimelineState>;
  let viewComponent;
  let jumboComponent;

  // for overwriting component.pageData to test jumbotron @Input
  let jumboData = {
    title: "Test Title",
    description: "Test Description",
  };

  let testData: History[] = [
    {
      id: 1,
      title: "TITLE",
      event_date_utc: "2018-02-06T20:45:00.000Z",
      event_date_unix: 2,
      flight_number: 3,
      details: "DETAILS",
      links: {
        reddit: "REDDIT",
        article: "ARTICLE",
        wikipedia: "WIKIPEDIA",
      },
    },
  ];

  const initialState = {
    timelineFeature: {
      events: {
        ids: [1],
        entities: testData,
        loading: false,
        loaded: true,
      },
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialDesignModule,
        TestingModule,
        SharedModule,
        MglTimelineModule,
        NoopAnimationsModule,
      ],
      declarations: [TimelineContainerComponent, ...fromComponents.components],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineContainerComponent);
    component = fixture.componentInstance;
    component.pageData = jumboData;
    viewComponent = fixture.debugElement.query(By.css("app-timeline"))
      .componentInstance;
    jumboComponent = fixture.debugElement.query(By.css("app-jumbotron"))
      .componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should populate data$", (done: DoneFn) => {
    component.data$.subscribe((data) => {
      expect(data).toEqual(testData, "expected data");
      done();
    });
  });

  it("should set @Input history to be populated from data$", () => {
    expect(viewComponent.history).toEqual(testData);
  });

  it("should set title and description in Jumbotron", () => {
    expect(jumboComponent.pageData).toEqual(jumboData);
  });
});
