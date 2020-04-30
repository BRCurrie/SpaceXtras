// listen to load launches action and produce a side effect
// http request then signal the request was successful

import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
// catchError used to be catch
import { map, switchMap, catchError } from "rxjs/operators";

import * as launchActions from "../actions/launches.action";

import { LaunchService } from "../../services/launch.service";

@Injectable()
export class LaunchesEffects {
  constructor(
    private actions$: Actions,
    private launchService: LaunchService
  ) {}

  // listen to an action of the type of load launches
  // then perform a side effect.
  @Effect()
  loadLaunches$ = this.actions$.pipe(
    ofType(launchActions.LOAD_LAUNCHES),
    // pipe contains the stream instead of chaining with .map .filter etc.
    // pipe needs to return an action
    // switchMap to return a new observable then map over and dispatch a new action
    switchMap(() => {
      return this.launchService.getAllLaunches().pipe(
        // map over the results
        map((launches) => new launchActions.LoadLaunchesSuccess(launches)),
        catchError((error) => of(new launchActions.LoadLaunchesFail(error)))
      );
    })
  );
}
