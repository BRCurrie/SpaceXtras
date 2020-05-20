import * as fromNextLaunch from "../actions/next-launch.action";

import { Launch } from "../../../shared/interfaces/launch";

export interface NextLaunchState {
  // entities: { [flight_number: number]: Launch };
  data: Launch[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: NextLaunchState = {
  // entities: {},
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromNextLaunch.NextLaunchActions
): NextLaunchState {
  switch (action.type) {
    case fromNextLaunch.LOAD_NEXT_LAUNCH: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromNextLaunch.LOAD_NEXT_LAUNCH_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromNextLaunch.LOAD_NEXT_LAUNCH_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getNextLaunch = (state: NextLaunchState) => state.data;
export const getNextLaunchLoading = (state: NextLaunchState) => state.loading;
export const getNextLaunchLoaded = (state: NextLaunchState) => state.loaded;
