import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import * as fromEvents from "./events.reducer";

// export all of the features for this timelineFeature module

export interface TimelineFeatureState {
  // define the structure of our state tree
  events: fromEvents.TimelineState;
}

// what we expect our state tree to look like
// const state = {
//   timelineFeature: {
//    events: {
//     data: [],
//     loaded: false,
//     loading: false
//   }
//  }
// }

// register our reducers
// ActionReducerMap accepts generic type
// we now know we are definitely implementing the correct reducers
// based on the different levels of state.
export const reducers: ActionReducerMap<TimelineFeatureState> = {
  //  slice of state is managed by reducer function
  // we are binding our reducer function to our events
  events: fromEvents.reducer,
};

// name comes from the creation of the module, starts with an object property
// called launchesFeature. We are creating that base reference.
export const getTimelineFeatureState = createFeatureSelector<
  TimelineFeatureState
>("timelineFeature");

// going down from timelineFeature and selecting the timeline state
// timelinestate
// createSelector we can pass in functions, which we can then call from a component to pass in slice of state.
export const getTimelineState = createSelector(
  // pass in timelineFeature
  getTimelineFeatureState,
  // return state.events
  (state: TimelineFeatureState) => state.events
);

// get our events object from the state.
// we can now use those functions from reducer.ts for our selectors.
// these will give us slices of state from state: Feature: eventss: data/loading/loaded.
// name of const changed from getAllEvents to getEventsEntities with entities change
export const getEventsEntities = createSelector(
  getTimelineState,
  fromEvents.getEventsEntities
);

export const getAllEvents = createSelector(getEventsEntities, (entities) => {
  // convert object data structure into an array
  return Object.keys(entities).map(
    (flight_number) => entities[parseInt(flight_number)]
  );
});

export const getEventsLoaded = createSelector(
  getTimelineState,
  fromEvents.getEventsLoaded
);
export const getEventsLoading = createSelector(
  getTimelineState,
  fromEvents.getEventsLoading
);
