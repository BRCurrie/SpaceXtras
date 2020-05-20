import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as roadsterActions from "../actions/roadster.action";

import { RoadsterService } from "../../services/roadster.service";

@Injectable()
export class RoadsterEffects {
  constructor(
    private actions$: Actions,
    private roadsterService: RoadsterService
  ) {}

  @Effect()
  loadRoadster$ = this.actions$.pipe(
    ofType(roadsterActions.LOAD_ROADSTER),
    switchMap(() => {
      return this.roadsterService.getRequest().pipe(
        map((roadster) => new roadsterActions.LoadRoadsterSuccess(roadster)),
        catchError((error) => of(new roadsterActions.LoadRoadsterFail(error)))
      );
    })
  );
}
