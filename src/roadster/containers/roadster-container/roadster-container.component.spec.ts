import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsterContainerComponent } from './roadster-container.component';

describe('RoadsterContainerComponent', () => {
  let component: RoadsterContainerComponent;
  let fixture: ComponentFixture<RoadsterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadsterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
