// import all of our actions LOAD_LAUNCHES ETC.
import * as fromLaunches from "../actions/launches.action";

import { Launch } from "../../../shared/interfaces/launch";

export interface LaunchState {
  // define a slice of state that our reducer will manage in our entire state tree
  // data: Launch[];
  // an array does not scale well, so we use entities instead.
  entities: { [flight_number: number]: Launch };
  loaded: boolean;
  loading: boolean;
}

// application state
export const initialState: LaunchState = {
  // data: [],
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
      // create variables and return new representation of state.
      // return a new object.
      return {
        ...state,
        // toggle back to false
        loading: false,
        // state is now changed to loaded. we can control things like spinners
        // we can also use this with route guards to make sure it is loaded,
        // otherwise we can make sure it loads for us.
        loaded: true,
        // then bind data recieved from effect back into the state
        // data, // removed on entities update.
        entities,
      };
    }
    case fromLaunches.LOAD_LAUNCHES_FAIL: {
      // create variables and return new representation of state.
      // return a new object.
      return {
        ...state,
        loading: false,
        // on a fail you have not loaded anything. eradicates any previous state.
        loaded: false,
      };
    }
  }
  // helps us bind the initialState to the store when it is initialized
  return state;
}

// export functions that can access those properties so we can reuse them.
export const getLaunchesEntities = (state: LaunchState) => state.entities;
export const getLaunchesLoading = (state: LaunchState) => state.loading;
export const getLaunchesLoaded = (state: LaunchState) => state.loaded;
