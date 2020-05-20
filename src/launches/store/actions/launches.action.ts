import { Action } from "@ngrx/store";

import { Launch } from "../../../shared/interfaces/launch";

export const LOAD_LAUNCHES = "[Launches] Load Launches";
export const LOAD_LAUNCHES_FAIL = "[Launches] Load Launches Fail";
export const LOAD_LAUNCHES_SUCCESS = "[Launches] Load Launches Success";

export class LoadLaunches implements Action {
  readonly type = LOAD_LAUNCHES;
}

export class LoadLaunchesFail implements Action {
  readonly type = LOAD_LAUNCHES_FAIL;
  constructor(public payload: any) {}
}

export class LoadLaunchesSuccess implements Action {
  readonly type = LOAD_LAUNCHES_SUCCESS;
  constructor(public payload: Launch[]) {}
}

export type LaunchesActions =
  | LoadLaunches
  | LoadLaunchesFail
  | LoadLaunchesSuccess;
