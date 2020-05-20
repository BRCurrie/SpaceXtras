import * as fromEvents from "../actions/events.action";

import { History } from "../../interfaces/history";

export interface TimelineState {
  entities: { [id: number]: History };
  loaded: boolean;
  loading: boolean;
}

export const initialState: TimelineState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromEvents.EventsActions
): TimelineState {
  switch (action.type) {
    case fromEvents.LOAD_EVENTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromEvents.LOAD_EVENTS_SUCCESS: {
      const events = action.payload;
      const entities = events.reduce(
        (entities: { [id: number]: History }, event: History) => {
          return {
            ...entities,
            [event.id]: event,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
    case fromEvents.LOAD_EVENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getEventsEntities = (state: TimelineState) => state.entities;
export const getEventsLoading = (state: TimelineState) => state.loading;
export const getEventsLoaded = (state: TimelineState) => state.loaded;
