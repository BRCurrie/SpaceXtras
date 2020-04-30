// import all of our actions
import * as fromRoadster from "../actions/roadster.action";

import { Roadster } from "../../interfaces/roadster";

export interface RoadsterState {
  // define a slice of state that our reducer will manage in our entire state tree
  data: Roadster[];
  loaded: boolean;
  loading: boolean;
}

// application state
export const initialState: RoadsterState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  // supply the initialState as the first argument
  state = initialState,
  // action e.g. LOAD_ROADSTER
  action: fromRoadster.RoadsterActions
): RoadsterState {
  // Conforms to the type, but changes the values
  switch (action.type) {
    case fromRoadster.LOAD_ROADSTER: {
      // create variables and return new representation of state.
      // return a new object.
      return {
        ...state,
        // toggle to true
        loading: true,
      };
    }
    case fromRoadster.LOAD_ROADSTER_SUCCESS: {
      // console.log(action.payload);
      const data = action.payload;
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
        data,
      };
    }
    case fromRoadster.LOAD_ROADSTER_FAIL: {
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
export const getRoadsterLoading = (state: RoadsterState) => state.loading;
export const getRoadsterLoaded = (state: RoadsterState) => state.loaded;
export const getRoadster = (state: RoadsterState) => state.data;
