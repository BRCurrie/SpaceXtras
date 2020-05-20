import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import * as fromEvents from "./events.reducer";

export interface TimelineFeatureState {
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

export const reducers: ActionReducerMap<TimelineFeatureState> = {
  events: fromEvents.reducer,
};

export const getTimelineFeatureState = createFeatureSelector<
  TimelineFeatureState
>("timelineFeature");

export const getTimelineState = createSelector(
  getTimelineFeatureState,
  (state: TimelineFeatureState) => state.events
);

export const getEventsEntities = createSelector(
  getTimelineState,
  fromEvents.getEventsEntities
);

export const getAllEvents = createSelector(getEventsEntities, (entities) => {
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
