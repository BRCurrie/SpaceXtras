import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { Actions } from "@ngrx/effects";

import { hot, cold } from "jasmine-marbles";
import { Observable, empty, of } from "rxjs";

import { HistoryService } from "../../services/history.service";
import * as fromEffects from "./events.effects";
import * as fromActions from "../actions/events.action";

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe("EventsEffects", () => {
  let actions$: TestActions;
  let service: HistoryService;
  let effects: fromEffects.EventsEffects;

  const testData = [
    {
      id: 1,
      title: "TITLE",
      event_date_utc: "2018-02-06T20:45:00.000Z",
      event_date_unix: 2,
      flight_number: 3,
      details: "DETAILS",
      links: {
        reddit: "REDDIT",
        article: "ARTICLE",
        wikipedia: "WIKIPEDIA",
      },
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HistoryService,
        fromEffects.EventsEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(HistoryService);
    effects = TestBed.get(fromEffects.EventsEffects);

    spyOn(service, "getRequest").and.returnValue(of(testData));
  });

  describe("loadEvents$", () => {
    it("should return a collection from LoadEventsSuccess", () => {
      const action = new fromActions.LoadEvents();
      const completion = new fromActions.LoadEventsSuccess(testData);

      actions$.stream = hot("-a", { a: action });
      const expected = cold("-b", { b: completion });

      expect(effects.loadEvents$).toBeObservable(expected);
    });
  });
});
