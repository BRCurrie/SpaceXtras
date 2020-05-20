import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { Actions } from "@ngrx/effects";

import { hot, cold } from "jasmine-marbles";
import { of } from "rxjs";

import { RoadsterService } from "../../services/roadster.service";
import * as fromEffects from "./roadster.effects";
import * as fromActions from "../actions/roadster.action";
import { mockRoadster } from "src/testing/mock-roadster";

import { getActions, TestActions } from "../../../testing/functions";

describe("RoadsterEffects", () => {
  let actions$: TestActions;
  let service: RoadsterService;
  let effects: fromEffects.RoadsterEffects;

  const testData = [mockRoadster];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RoadsterService,
        fromEffects.RoadsterEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(RoadsterService);
    effects = TestBed.get(fromEffects.RoadsterEffects);

    spyOn(service, "getRequest").and.returnValue(of(testData));
  });

  describe("loadRoadster$", () => {
    it("should return a collection from LoadRoadsterSuccess", () => {
      const action = new fromActions.LoadRoadster();
      const completion = new fromActions.LoadRoadsterSuccess(testData);

      actions$.stream = hot("-a", { a: action });
      const expected = cold("-b", { b: completion });

      expect(effects.loadRoadster$).toBeObservable(expected);
    });
  });
});
