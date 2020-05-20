import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as launchActions from "../actions/launches.action";

import { LaunchService } from "../../services/launch.service";

@Injectable()
export class LaunchesEffects {
  constructor(
    private actions$: Actions,
    private launchService: LaunchService
  ) {}

  @Effect()
  loadLaunches$ = this.actions$.pipe(
    ofType(launchActions.LOAD_LAUNCHES),
    switchMap(() => {
      return this.launchService.getRequest().pipe(
        map((launches) => new launchActions.LoadLaunchesSuccess(launches)),
        catchError((error) => of(new launchActions.LoadLaunchesFail(error)))
      );
    })
  );
}
