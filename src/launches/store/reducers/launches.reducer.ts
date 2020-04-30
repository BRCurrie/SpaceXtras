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
  // supply the initialState as the first argument
  state = initialState,
  // action e.g. LOAD_PIZZA
  action: fromLaunches.LaunchesActions
): LaunchState {
  // Conforms to the type, but changes the values
  switch (action.type) {
    case fromLaunches.LOAD_LAUNCHES: {
      // create variables and return new representation of state.
      // return a new object.
      return {
        ...state,
        // toggle to true
        loading: true,
      };
    }
    case fromLaunches.LOAD_LAUNCHES_SUCCESS: {
      // console.log(action.payload);
      // const data = action.payload; // changed to launches with entities update.

      const launches = action.payload;
      // create entities property.
      // could create data structure in a file to import a helper function
      const entities = launches.reduce(
        (entities: { [flight_number: number]: Launch }, launch: Launch) => {
          // return a new state object with entities keyed by the flight_number
          return {
            ...entities,
            // Would make finding it easier by using flight_number instead of
            // iterating over the array
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
