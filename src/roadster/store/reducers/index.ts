import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import * as fromRoadster from "./roadster.reducer";

export interface RoadsterFeatureState {
  roadster: fromRoadster.RoadsterState;
}

// what we expect our state tree to look like
// const state = {
//   roadsterFeature: {
//    roadster: {
//     data: [],
//     loaded: false,
//     loading: false
//   }
//  }
// }

export const reducers: ActionReducerMap<RoadsterFeatureState> = {
  roadster: fromRoadster.reducer,
};

export const getRoadsterFeatureState = createFeatureSelector<
  RoadsterFeatureState
>("roadsterFeature");

export const getRoadsterState = createSelector(
  getRoadsterFeatureState,
  (state: RoadsterFeatureState) => state.roadster
);

export const getRoadster = createSelector(
  getRoadsterState,
  fromRoadster.getRoadster
);

// export const getRoadsterEntities = createSelector(
//   getRoadsterState,
//   fromRoadster.getRoadsterEntities
// );

// export const getRoadster = createSelector(getRoadsterEntities, (entities) => {
//   return Object.keys(entities).map((norad_id) => entities[parseInt(norad_id)]);
// });
export const getRoadsterLoaded = createSelector(
  getRoadsterState,
  fromRoadster.getRoadsterLoaded
);
export const getRoadsterLoading = createSelector(
  getRoadsterState,
  fromRoadster.getRoadsterLoading
);
