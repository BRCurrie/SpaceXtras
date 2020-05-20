import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { Actions } from "@ngrx/effects";

import { hot, cold } from "jasmine-marbles";
import { of } from "rxjs";

import { LaunchService } from "../../services/launch.service";
import * as fromEffects from "./launches.effects";
import * as fromActions from "../actions/launches.action";
import { Launch } from "src/shared/interfaces/launch";
import { getActions, TestActions } from "../../../testing/functions";
import { mockLaunch } from "src/testing/mock-launch";

describe("LaunchesEffects", () => {
  let actions$: TestActions;
  let service: LaunchService;
  let effects: fromEffects.LaunchesEffects;

  const testData: Launch[] = [mockLaunch];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LaunchService,
        fromEffects.LaunchesEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(LaunchService);
    effects = TestBed.get(fromEffects.LaunchesEffects);

    spyOn(service, "getRequest").and.returnValue(of(testData));
  });

  describe("loadEvents$", () => {
    it("should return a collection from LoadEventsSuccess", () => {
      const action = new fromActions.LoadLaunches();
      const completion = new fromActions.LoadLaunchesSuccess(testData);

      actions$.stream = hot("-a", { a: action });
      const expected = cold("-b", { b: completion });

      expect(effects.loadLaunches$).toBeObservable(expected);
    });
  });
});
