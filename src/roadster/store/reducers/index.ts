import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import * as fromRoadster from "./roadster.reducer";

// export all of the features for this product module

export interface RoadsterFeatureState {
  // define the structure of our state tree
  roadster: fromRoadster.RoadsterState;
}

// what we expect our state tree to look like
// products is a feature module
// const state = {
//   roadsterFeature: {
//    roadster: {
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
export const reducers: ActionReducerMap<RoadsterFeatureState> = {
  //  slice of state is managed by reducer function
  // we are binding our reducer function to our roadster
  roadster: fromRoadster.reducer,
};

// name comes from the creation of the module, starts with an object property
// called products. We are creating that base reference.
export const getRoadsterFeatureState = createFeatureSelector<
  RoadsterFeatureState
>("roadsterFeature");

// going down from products and selecting the roadster state
// createSelector we can pass in functions, which we can then call from a component to pass in slice of state.
export const getRoadsterState = createSelector(
  // pass in products
  getRoadsterFeatureState,
  // return state.roadster
  (state: RoadsterFeatureState) => state.roadster
);

// get our roadster object from the state.
// we can now use those functions from reducer.ts for our selectors.
// these will give us slices of state from state: roadsterFeature: roadster: data/loading/loaded.
export const getRoadster = createSelector(
  getRoadsterState,
  fromRoadster.getRoadster
);
export const getRoadsterLoaded = createSelector(
  getRoadsterState,
  fromRoadster.getRoadsterLoaded
);
export const getRoadsterLoading = createSelector(
  getRoadsterState,
  fromRoadster.getRoadsterLoading
);
