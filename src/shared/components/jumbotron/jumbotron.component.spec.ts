import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

import { JumbotronComponent } from "./jumbotron.component";

describe("JumbotronComponent", () => {
  let component: JumbotronComponent;
  let fixture: ComponentFixture<JumbotronComponent>;

  let bgTest = "testBG";
  let pageDataTest = {
    title: "Test title",
    description: "Test description",
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [JumbotronComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronComponent);
    component = fixture.componentInstance;
    component.background = bgTest;
    component.pageData = pageDataTest;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(component.background).toEqual(bgTest);
    expect(component.pageData).toEqual(pageDataTest);
  });

  // TODO:
  // fix this test, has no expectations

  // it("should populate add the bgImg as class to the jumbotron", () => {
  //   let classes: any = fixture.debugElement.query(By.css("#jumbotron")).classes;
  //   expect(classes.bgTest).toBeTruthy;
  // });

  it("should populate the title from pageData", () => {
    let title = fixture.debugElement.query(By.css("h1"));
    expect(title.nativeElement.textContent.trim()).toBe(pageDataTest.title);
  });

  it("should populate the description from pageData", () => {
    let description = fixture.debugElement.query(By.css(".lead"));
    expect(description.nativeElement.textContent.trim()).toBe(
      pageDataTest.description
    );
  });
});
