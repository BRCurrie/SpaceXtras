import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

import { MaterialDesignModule } from "../material-design/material-design.module";
import { TestingModule } from "../testing/utils";
import { SharedModule } from "../shared/shared.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialDesignModule,
        TestingModule,
        SharedModule,
      ],
      declarations: [AppComponent, SidenavComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SpaceX Data'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("SpaceX Data");
  });
});
