import { Action } from "@ngrx/store";

import { Launch } from "../../../shared/interfaces/launch";

export const LOAD_NEXT_LAUNCH = "[Next Launch] Load Next Launch";
export const LOAD_NEXT_LAUNCH_FAIL = "[Next Launch] Load Next Launch Fail";
export const LOAD_NEXT_LAUNCH_SUCCESS =
  "[Next Launch] Load Next Launch Success";

export class LoadNextLaunch implements Action {
  readonly type = LOAD_NEXT_LAUNCH;
}

export class LoadNextLaunchFail implements Action {
  readonly type = LOAD_NEXT_LAUNCH_FAIL;
  constructor(public payload: any) {}
}

export class LoadNextLaunchSuccess implements Action {
  readonly type = LOAD_NEXT_LAUNCH_SUCCESS;
  constructor(public payload: Launch[]) {}
}

export type NextLaunchActions =
  | LoadNextLaunch
  | LoadNextLaunchFail
  | LoadNextLaunchSuccess;
