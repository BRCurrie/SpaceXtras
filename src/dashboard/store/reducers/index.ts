import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import * as fromNextLaunch from "./next-launch.reducer";

export interface DashboardFeatureState {
  nextLaunch: fromNextLaunch.NextLaunchState;
}

// what we expect our state tree to look like
// const state = {
//   DashboardFeature: {
//    nextLaunch: {
//     data: [],
//     loaded: false,
//     loading: false
//   }
//  }
// }

export const reducers: ActionReducerMap<DashboardFeatureState> = {
  nextLaunch: fromNextLaunch.reducer,
};

export const getDashboardFeatureState = createFeatureSelector<
  DashboardFeatureState
>("dashboardFeature");

export const getNextLaunchState = createSelector(
  getDashboardFeatureState,
  (state: DashboardFeatureState) => state.nextLaunch
);

export const getNextLaunchEntities = createSelector(
  getNextLaunchState,
  fromNextLaunch.getNextLaunch
);

export const getNextLaunch = createSelector(
  getNextLaunchState,
  fromNextLaunch.getNextLaunch
);

// export const getNextLaunch = createSelector(
//   getNextLaunchEntities,
//   (entities) => {
//     return Object.keys(entities).map(
//       (flight_number) => entities[parseInt(flight_number)]
//     );
//   }
// );

export const getNextLaunchLoaded = createSelector(
  getNextLaunchState,
  fromNextLaunch.getNextLaunchLoaded
);
export const getNextLaunchLoading = createSelector(
  getNextLaunchState,
  fromNextLaunch.getNextLaunchLoading
);
