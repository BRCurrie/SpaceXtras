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

  @Effect()
  loadEvents$ = this.actions$.pipe(
    ofType(eventActions.LOAD_EVENTS),
    switchMap(() => {
      return this.historyService.getRequest().pipe(
        map((event) => new eventActions.LoadEventsSuccess(event)),
        catchError((error) => of(new eventActions.LoadEventsFail(error)))
      );
    })
  );
}
