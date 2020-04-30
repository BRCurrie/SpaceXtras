import { Action } from "@ngrx/store";

// interface
import { Launch } from "../../../shared/interfaces/launch";

// load launches
// Launches is a namespace, good practice to name after feature module
// define the three things that can happen.
export const LOAD_LAUNCHES = "[Launches] Load Launches";
export const LOAD_LAUNCHES_FAIL = "[Launches] Load Launches Fail";
export const LOAD_LAUNCHES_SUCCESS = "[Launches] Load Launches Success";

// define action creators
export class LoadLaunches implements Action {
  readonly type = LOAD_LAUNCHES;
}

export class LoadLaunchesFail implements Action {
  readonly type = LOAD_LAUNCHES_FAIL;
  // pass a message back from the server if there is an error.
  constructor(public payload: any) {}
}

export class LoadLaunchesSuccess implements Action {
  readonly type = LOAD_LAUNCHES_SUCCESS;
  // pass the array back, we expect a JSON array.
  constructor(public payload: Launch[]) {}
}

// export action types
// used to tie in our reducers.
export type LaunchesActions =
  | LoadLaunches
  | LoadLaunchesFail
  | LoadLaunchesSuccess;
