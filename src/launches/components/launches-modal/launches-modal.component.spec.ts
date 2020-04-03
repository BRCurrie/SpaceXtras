import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesModalComponent } from './launches-modal.component';

describe('LaunchesModalComponent', () => {
  let component: LaunchesModalComponent;
  let fixture: ComponentFixture<LaunchesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
