import { Action } from "@ngrx/store";

// interface
import { History } from "../../interfaces/history";

// load events
// Timeline is a namespace, good practice to name after feature module
// define the three things that can happen.
export const LOAD_EVENTS = "[Timeline] Load Timeline";
export const LOAD_EVENTS_FAIL = "[Timeline] Load Timeline Fail";
export const LOAD_EVENTS_SUCCESS = "[Timeline] Load Timeline Success";

// define action creators
export class LoadEvents implements Action {
  readonly type = LOAD_EVENTS;
}

export class LoadEventsFail implements Action {
  readonly type = LOAD_EVENTS_FAIL;
  // pass a message back from the server if there is an error.
  constructor(public payload: any) {}
}

export class LoadEventsSuccess implements Action {
  readonly type = LOAD_EVENTS_SUCCESS;
  // pass the array back, we expect a JSON array.
  constructor(public payload: History[]) {}
}

// export action types
// used to tie in our reducers.
export type EventsActions = LoadEvents | LoadEventsFail | LoadEventsSuccess;
