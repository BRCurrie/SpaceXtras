// import all of our actions LOAD_EVENTS ETC.
import * as fromEvents from "../actions/events.action";

import { History } from "../../interfaces/history";

export interface TimelineState {
  // define a slice of state that our reducer will manage in our entire state tree
  // an array does not scale well, so we use entities instead.
  entities: { [id: number]: History };
  loaded: boolean;
  loading: boolean;
}

// application state
export const initialState: TimelineState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  // supply the initialState as the first argument
  state = initialState,
  // action e.g. LOAD_PIZZA
  action: fromEvents.EventsActions
): TimelineState {
  // Conforms to the type, but changes the values
  switch (action.type) {
    case fromEvents.LOAD_EVENTS: {
      // create variables and return new representation of state.
      // return a new object.
      return {
        ...state,
        // toggle to true
        loading: true,
      };
    }
    case fromEvents.LOAD_EVENTS_SUCCESS: {
      // console.log(action.payload);
      // const data = action.payload; // changed to eventss with entities update.

      const events = action.payload;
      // create entities property.
      // could create data structure in a file to import a helper function
      const entities = events.reduce(
        (entities: { [id: number]: History }, event: History) => {
          // return a new state object with entities keyed by the id
          return {
            ...entities,
            // Would make finding it easier by using id instead of
            // iterating over the array
            [event.id]: event,
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
        entities,
      };
    }
    case fromEvents.LOAD_EVENTS_FAIL: {
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
export const getEventsEntities = (state: TimelineState) => state.entities;
export const getEventsLoading = (state: TimelineState) => state.loading;
export const getEventsLoaded = (state: TimelineState) => state.loaded;
