import { Action } from "@ngrx/store";

import { Roadster } from "../../interfaces/roadster";

export const LOAD_ROADSTER = "[Roadster] Load Roadster";
export const LOAD_ROADSTER_FAIL = "[Roadster] Load Roadster Fail";
export const LOAD_ROADSTER_SUCCESS = "[Roadster] Load Roadster Success";

export class LoadRoadster implements Action {
  readonly type = LOAD_ROADSTER;
}

export class LoadRoadsterFail implements Action {
  readonly type = LOAD_ROADSTER_FAIL;
  constructor(public payload: any) {}
}

export class LoadRoadsterSuccess implements Action {
  readonly type = LOAD_ROADSTER_SUCCESS;
  constructor(public payload: Roadster[]) {}
}

export type RoadsterActions =
  | LoadRoadster
  | LoadRoadsterFail
  | LoadRoadsterSuccess;
