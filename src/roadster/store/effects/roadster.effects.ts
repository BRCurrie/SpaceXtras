// listen to load roadster action and produce a side effect
// http request then signal the request was successful

import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
// catchError used to be catch
import { map, switchMap, catchError } from "rxjs/operators";

import * as roadsterActions from "../actions/roadster.action";

import { RoadsterService } from "../../services/roadster.service";

@Injectable()
export class RoadsterEffects {
  constructor(
    private actions$: Actions,
    private roadsterService: RoadsterService
  ) {}

  // listen to an action of the type of load pizzas
  // then perform a side effect.
  @Effect()
  loadRoadster$ = this.actions$.pipe(
    ofType(roadsterActions.LOAD_ROADSTER),
    // pipe contains the stream instead of chaining with .map .filter etc.
    // pipe needs to return an action
    // switchMap to return a new observable then map over and dispatch a new action
    switchMap(() => {
      return this.roadsterService.getRequest().pipe(
        // map over the results
        map((roadster) => new roadsterActions.LoadRoadsterSuccess(roadster)),
        catchError((error) => of(new roadsterActions.LoadRoadsterFail(error)))
      );
    })
  );
}
