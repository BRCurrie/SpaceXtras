import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { Actions } from "@ngrx/effects";

import { hot, cold } from "jasmine-marbles";
import { of } from "rxjs";

import { HistoryService } from "../../services/history.service";
import * as fromEffects from "./events.effects";
import * as fromActions from "../actions/events.action";

import { getActions, TestActions } from "../../../testing/functions";
import { mockEvent } from "src/testing/mock-events";

describe("EventsEffects", () => {
  let actions$: TestActions;
  let service: HistoryService;
  let effects: fromEffects.EventsEffects;

  const testData = [mockEvent];

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
