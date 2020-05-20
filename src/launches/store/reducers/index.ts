import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import * as fromLaunches from "./launches.reducer";

export interface LaunchesFeatureState {
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

export const reducers: ActionReducerMap<LaunchesFeatureState> = {
  launches: fromLaunches.reducer,
};

export const getLaunchesFeatureState = createFeatureSelector<
  LaunchesFeatureState
>("launchesFeature");

export const getLaunchState = createSelector(
  getLaunchesFeatureState,
  (state: LaunchesFeatureState) => state.launches
);

export const getLaunchesEntities = createSelector(
  getLaunchState,
  fromLaunches.getLaunchesEntities
);

export const getAllLaunches = createSelector(
  getLaunchesEntities,
  (entities) => {
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
