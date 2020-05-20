import * as fromLaunches from "../actions/launches.action";

import { Launch } from "../../../shared/interfaces/launch";

export interface LaunchState {
  entities: { [flight_number: number]: Launch };
  loaded: boolean;
  loading: boolean;
}

export const initialState: LaunchState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromLaunches.LaunchesActions
): LaunchState {
  switch (action.type) {
    case fromLaunches.LOAD_LAUNCHES: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromLaunches.LOAD_LAUNCHES_SUCCESS: {
      const launches = action.payload;
      const entities = launches.reduce(
        (entities: { [flight_number: number]: Launch }, launch: Launch) => {
          return {
            ...entities,
            [launch.flight_number]: launch,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
    case fromLaunches.LOAD_LAUNCHES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getLaunchesEntities = (state: LaunchState) => state.entities;
export const getLaunchesLoading = (state: LaunchState) => state.loading;
export const getLaunchesLoaded = (state: LaunchState) => state.loaded;
