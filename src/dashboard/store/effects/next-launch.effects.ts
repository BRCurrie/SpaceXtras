import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as nextLaunchActions from "../actions/next-launch.action";

import { NextLaunchService } from "../../services/next-launch.service";

@Injectable()
export class NextLaunchEffects {
  constructor(
    private actions$: Actions,
    private nextLaunchService: NextLaunchService
  ) {}

  @Effect()
  loadNextLaunch$ = this.actions$.pipe(
    ofType(nextLaunchActions.LOAD_NEXT_LAUNCH),
    switchMap(() => {
      return this.nextLaunchService.getRequest().pipe(
        map((next) => new nextLaunchActions.LoadNextLaunchSuccess(next)),
        catchError((error) =>
          of(new nextLaunchActions.LoadNextLaunchFail(error))
        )
      );
    })
  );
}
