import { Action } from "@ngrx/store";

import { History } from "../../interfaces/history";

export const LOAD_EVENTS = "[Timeline] Load Timeline";
export const LOAD_EVENTS_FAIL = "[Timeline] Load Timeline Fail";
export const LOAD_EVENTS_SUCCESS = "[Timeline] Load Timeline Success";

export class LoadEvents implements Action {
  readonly type = LOAD_EVENTS;
}

export class LoadEventsFail implements Action {
  readonly type = LOAD_EVENTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadEventsSuccess implements Action {
  readonly type = LOAD_EVENTS_SUCCESS;
  constructor(public payload: History[]) {}
}

export type EventsActions = LoadEvents | LoadEventsFail | LoadEventsSuccess;
