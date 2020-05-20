import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

import {
  provideMockStore,
  // MockStore
} from "@ngrx/store/testing";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";

import { RoadsterContainerComponent } from "./roadster-container.component";
import * as fromComponents from "../../components";
import { Roadster } from "../../interfaces/roadster";

import { mockRoadster } from "../../../testing/mock-roadster";

describe("RoadsterContainerComponent", () => {
  let component: RoadsterContainerComponent;
  let fixture: ComponentFixture<RoadsterContainerComponent>;
  let viewComponent;
  let jumboComponent;

  let jumboData = {
    title: "Test Title",
    description: "Test Description",
  };

  let testData: Roadster[] = [mockRoadster];

  const initialState = {
    roadsterFeature: {
      roadster: {
        data: testData,
        loaded: true,
        loading: false,
      },
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialDesignModule,
        TestingModule,
        SharedModule,
        NoopAnimationsModule,
      ],
      declarations: [RoadsterContainerComponent, ...fromComponents.components],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsterContainerComponent);
    component = fixture.componentInstance;
    component.pageData = jumboData;
    viewComponent = fixture.debugElement.query(By.css("app-roadster"))
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

  it("should set @Input roadster to be populated from data$", () => {
    expect(viewComponent.roadster).toEqual(testData);
  });

  it("should set title and description in Jumbotron", () => {
    expect(jumboComponent.pageData).toEqual(jumboData);
  });
});
