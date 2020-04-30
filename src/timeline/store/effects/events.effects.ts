// listen to load eventss action and produce a side effect
// http request then signal the request was successful

import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as eventActions from "../actions/events.action";

import { HistoryService } from "../../services/history.service";

@Injectable()
export class EventsEffects {
  constructor(
    private actions$: Actions,
    private historyService: HistoryService
  ) {}

  // listen to an action of the type of load events
  // then perform a side effect.
  @Effect()
  loadEvents$ = this.actions$.pipe(
    ofType(eventActions.LOAD_EVENTS),
    // pipe contains the stream instead of chaining with .map .filter etc.
    // pipe needs to return an action
    // switchMap to return a new observable then map over and dispatch a new action
    switchMap(() => {
      return this.historyService.getHistory().pipe(
        // map over the results
        map((event) => new eventActions.LoadEventsSuccess(event)),
        catchError((error) => of(new eventActions.LoadEventsFail(error)))
      );
    })
  );
}
