import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { By } from "@angular/platform-browser";

import { AboutContainerComponent } from "./about-container.component";

import { MaterialDesignModule } from "../../../material-design/material-design.module";
import { TestingModule } from "../../../testing/utils";
import { SharedModule } from "../../../shared/shared.module";
import * as fromComponents from "../../components";

describe("AboutComponent", () => {
  let component: AboutContainerComponent;
  let fixture: ComponentFixture<AboutContainerComponent>;
  let jumboComponent;

  let jumboData = {
    title: "Test Title",
    description: "Test Description",
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDesignModule, TestingModule, SharedModule],
      declarations: [AboutContainerComponent, ...fromComponents.components],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContainerComponent);
    component = fixture.componentInstance;
    component.pageData = jumboData;

    jumboComponent = fixture.debugElement.query(By.css("app-jumbotron"))
      .componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set title and description in Jumbotron", () => {
    expect(jumboComponent.pageData).toEqual(jumboData);
  });
});
