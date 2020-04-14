import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCardsComponent } from './history-cards.component';

describe('HistoryCardsComponent', () => {
  let component: HistoryCardsComponent;
  let fixture: ComponentFixture<HistoryCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
