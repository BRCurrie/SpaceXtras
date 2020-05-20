import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import {
  provideMockStore,
  // MockStore
} from "@ngrx/store/testing";
import { By } from "@angular/platform-browser";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { SharedModule } from "../../../shared/shared.module";
import { TestingModule } from "../../../testing/utils";

import { LaunchContainerComponent } from "./launch-container.component";
import * as fromComponents from "../../components";
import { Launch } from "../../../shared/interfaces/launch";
import { mockLaunch } from "src/testing/mock-launch";

describe("LaunchContainerComponent", () => {
  let launchSpy: jasmine.Spy;

  let component: LaunchContainerComponent;
  let fixture: ComponentFixture<LaunchContainerComponent>;
  let viewComponent;
  let jumboComponent;

  let jumboData = {
    title: "Test Title",
    description: "Test Description",
  };

  let testData: Launch[] = [mockLaunch];

  const initialState = {
    launchesFeature: {
      launches: {
        id: [0],
        entities: testData,
        loading: false,
        loaded: true,
      },
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TestingModule,
        MaterialDesignModule,
        SharedModule,
      ],
      declarations: [LaunchContainerComponent, ...fromComponents.components],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchContainerComponent);
    component = fixture.componentInstance;
    component.pageData = jumboData;
    viewComponent = fixture.debugElement.query(By.css("app-launches-table"))
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
      expect(data).toContain(testData[0], "expected data");
      done();
    });
  });

  it("should set @Input launches to be populated from data$", () => {
    expect(viewComponent.launches).toEqual(testData);
  });

  it("should set title and description in Jumbotron", () => {
    expect(jumboComponent.pageData).toEqual(jumboData);
  });
});
