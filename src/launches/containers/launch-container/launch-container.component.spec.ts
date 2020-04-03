import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchContainerComponent } from './launch-container.component';

describe('LaunchContainerComponent', () => {
  let component: LaunchContainerComponent;
  let fixture: ComponentFixture<LaunchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
