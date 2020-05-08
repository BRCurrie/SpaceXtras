import * as fromEvents from "./events.reducer";
import * as fromActions from "../actions/events.action";
import { History } from "../../interfaces/history";

describe("EventsReducer", () => {
  describe("undefined action", () => {
    it("should return the default state", () => {
      const { initialState } = fromEvents;
      const action = {} as any;
      const state = fromEvents.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe("LOAD_EVENTS action", () => {
    it("should set loading to true", () => {
      const { initialState } = fromEvents;
      const action = new fromActions.LoadEvents();

      const state = fromEvents.reducer(initialState, action);
      expect(state.entities).toEqual({});
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe("LOAD_EVENTS_SUCCESS action", () => {
    it("should map an array to entities", () => {
      // expected input.
      const events: History[] = [
        {
          id: 1,
          title: "TITLE 1",
          event_date_utc: "2018-02-06T20:45:00.000Z",
          event_date_unix: 2,
          flight_number: 3,
          details: "DETAILS",
          links: {
            reddit: "REDDIT",
            article: "ARTICLE",
            wikipedia: "WIKIPEDIA",
          },
        },
        {
          id: 2,
          title: "TITLE 2",
          event_date_utc: "2019-02-06T20:45:00.000Z",
          event_date_unix: 2,
          flight_number: 3,
          details: "DETAILS 2",
          links: {
            reddit: "REDDIT 2",
            article: "ARTICLE 2",
            wikipedia: "WIKIPEDIA 2",
          },
        },
      ];
      // expected output
      const entities = {
        // id of 1 and array index 0
        1: events[0],
        // id of 2 and array index 1
        2: events[1],
      };
      const { initialState } = fromEvents;
      const action = new fromActions.LoadEventsSuccess(events);
      const state = fromEvents.reducer(initialState, action);

      expect(state.entities).toEqual(entities);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });

  describe("LOAD_EVENTS_FAIL action", () => {
    it("should return the initial state", () => {
      const { initialState } = fromEvents;
      const action = new fromActions.LoadEventsFail({});
      const state = fromEvents.reducer(initialState, action);

      expect(state).toEqual(initialState);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
    it("should return the previous state", () => {
      const { initialState } = fromEvents;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.LoadEventsFail({});
      const state = fromEvents.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });
});

// test some of the lower level selectors
describe("EventsReducer Selectors", () => {
  describe("getEventsEntities", () => {
    it("should return .entities", () => {
      const entities: { [key: number]: History } = {
        1: {
          id: 1,
          title: "TITLE 1",
          event_date_utc: "2018-02-06T20:45:00.000Z",
          event_date_unix: 2,
          flight_number: 3,
          details: "DETAILS",
          links: {
            reddit: "REDDIT",
            article: "ARTICLE",
            wikipedia: "WIKIPEDIA",
          },
        },
        2: {
          id: 2,
          title: "TITLE 2",
          event_date_utc: "2019-02-06T20:45:00.000Z",
          event_date_unix: 2,
          flight_number: 3,
          details: "DETAILS 2",
          links: {
            reddit: "REDDIT 2",
            article: "ARTICLE 2",
            wikipedia: "WIKIPEDIA 2",
          },
        },
      };
      const { initialState } = fromEvents;
      const previousState = { ...initialState, entities };
      const slice = fromEvents.getEventsEntities(previousState);
      expect(slice).toEqual(entities);
    });
  });
  describe("getEventsLoading", () => {
    it("should return .loading", () => {
      const { initialState } = fromEvents;
      const previousState = { ...initialState, loading: true };
      const slice = fromEvents.getEventsLoading(previousState);
      expect(slice).toEqual(true);
    });
  });
  describe("getEventsLoaded", () => {
    it("should return .loaded", () => {
      const { initialState } = fromEvents;
      const previousState = { ...initialState, loaded: true };
      const slice = fromEvents.getEventsLoaded(previousState);
      expect(slice).toEqual(true);
    });
  });
});
