import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import * as fromLaunches from "./launches.reducer";

// export all of the features for this launchFeature module

export interface LaunchesFeatureState {
  // define the structure of our state tree
  launches: fromLaunches.LaunchState;
}

// what we expect our state tree to look like
// const state = {
//   launchesFeature: {
//    launches: {
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
export const reducers: ActionReducerMap<LaunchesFeatureState> = {
  //  slice of state is managed by reducer function
  // we are binding our reducer function to our launches
  launches: fromLaunches.reducer,
};

// name comes from the creation of the module, starts with an object property
// called launchesFeature. We are creating that base reference.
export const getLaunchesFeatureState = createFeatureSelector<
  LaunchesFeatureState
>("launchesFeature");

// going down from launchesFeature and selecting the launch state
// launch state
// createSelector we can pass in functions, which we can then call from a component to pass in slice of state.
export const getLaunchState = createSelector(
  // pass in launchesFeature
  getLaunchesFeatureState,
  // return state.launches
  (state: LaunchesFeatureState) => state.launches
);

// get our launch object from the state.
// we can now use those functions from reducer.ts for our selectors.
// these will give us slices of state from state: Feature: launches: data/loading/loaded.
// name of const changed from getAllLaunches to getLaunchesEntities with entities change
export const getLaunchesEntities = createSelector(
  getLaunchState,
  fromLaunches.getLaunchesEntities
);

export const getAllLaunches = createSelector(
  getLaunchesEntities,
  (entities) => {
    // convert object data structure into an array
    return Object.keys(entities).map(
      (flight_number) => entities[parseInt(flight_number)]
    );
  }
);

export const getLaunchesLoaded = createSelector(
  getLaunchState,
  fromLaunches.getLaunchesLoaded
);
export const getLaunchesLoading = createSelector(
  getLaunchState,
  fromLaunches.getLaunchesLoading
);
