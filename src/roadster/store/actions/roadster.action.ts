import { Action } from "@ngrx/store";

// interface
import { Roadster } from "../../interfaces/roadster";

// load roadster
// Products is a namespace, good practice to name after feature module
// define the three things that can happen.
export const LOAD_ROADSTER = "[Roadster] Load Roadster";
export const LOAD_ROADSTER_FAIL = "[Roadster] Load Roadster Fail";
export const LOAD_ROADSTER_SUCCESS = "[Roadster] Load Roadster Success";

// define action creators
export class LoadRoadster implements Action {
  readonly type = LOAD_ROADSTER;
}

export class LoadRoadsterFail implements Action {
  readonly type = LOAD_ROADSTER_FAIL;
  // pass a message back from the server if there is an error.
  constructor(public payload: any) {}
}

export class LoadRoadsterSuccess implements Action {
  readonly type = LOAD_ROADSTER_SUCCESS;
  // pass the array back, we expect a JSON array.
  constructor(public payload: Roadster[]) {}
}

// export action types
// used to tie in our reducers.
export type RoadsterActions =
  | LoadRoadster
  | LoadRoadsterFail
  | LoadRoadsterSuccess;
