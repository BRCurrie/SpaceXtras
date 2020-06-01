import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { By } from "@angular/platform-browser";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";

import { DashboardContainerComponent } from "./dashboard-container.component";
import * as fromComponents from "../../components";

describe("DashboardContainerComponent", () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;
  let viewComponent;

  // let testData: Next[] = [{}];

  // const initialState = {
  //   dashboardFeature: {
  //     launch: {
  //       ids: [1],
  //       entities: testData,
  //       loading: false,
  //       loaded: true,
  //     },
  //   },
  // };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialDesignModule,
        TestingModule,
        SharedModule,
        NoopAnimationsModule,
      ],
      declarations: [DashboardContainerComponent, ...fromComponents.components],
      // providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    // component.pageData = jumboData;
    // viewComponent = fixture.debugElement.query(By.css("app-dashboard"))
    //   .componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("should populate data$", (done: DoneFn) => {
  //   component.data$.subscribe((data) => {
  //     expect(data).toEqual(testData, "expected data");
  //     done();
  //   });
  // });

  // it("should set @Input history to be populated from data$", () => {
  //   expect(viewComponent.history).toEqual(testData);
  // });
});
