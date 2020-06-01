import * as fromRoadster from "../actions/roadster.action";

import { Roadster } from "../../interfaces/roadster";

export interface RoadsterState {
  data: Roadster[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: RoadsterState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromRoadster.RoadsterActions
): RoadsterState {
  switch (action.type) {
    case fromRoadster.LOAD_ROADSTER: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromRoadster.LOAD_ROADSTER_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromRoadster.LOAD_ROADSTER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getRoadsterLoading = (state: RoadsterState) => state.loading;
export const getRoadsterLoaded = (state: RoadsterState) => state.loaded;
export const getRoadster = (state: RoadsterState) => state.data;
