import * as fromRoadster from "./roadster.reducer";
import * as fromActions from "../actions/roadster.action";
import { Roadster } from "../../interfaces/roadster";
import { mockRoadster } from "src/testing/mock-roadster";

describe("RoadsterReducer", () => {
  describe("undefined action", () => {
    it("should return the default state", () => {
      const { initialState } = fromRoadster;
      const action = {} as any;
      const state = fromRoadster.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe("LOAD_ROADSTER action", () => {
    it("should set loading to true", () => {
      const { initialState } = fromRoadster;
      const action = new fromActions.LoadRoadster();

      const state = fromRoadster.reducer(initialState, action);
      expect(state.entities).toEqual([]);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe("LOAD_ROADSTER_SUCCESS action", () => {
    it("should map an array to entities", () => {
      const roadster: Roadster[] = [mockRoadster];
      // expected output
      // const entities = {
      //   // id of 1 and array index 0
      //   1: roadster[0],
      //   // id of 2 and array index 1
      //   2: roadster[1],
      // };
      const { initialState } = fromRoadster;
      const action = new fromActions.LoadRoadsterSuccess(roadster);
      const state = fromRoadster.reducer(initialState, action);

      expect(state.entities).toEqual(roadster);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });

  describe("LOAD_ROADSTER_FAIL action", () => {
    it("should return the initial state", () => {
      const { initialState } = fromRoadster;
      const action = new fromActions.LoadRoadsterFail({});
      const state = fromRoadster.reducer(initialState, action);

      expect(state).toEqual(initialState);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
    it("should return the previous state", () => {
      const { initialState } = fromRoadster;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.LoadRoadsterFail({});
      const state = fromRoadster.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });
});

// test some of the lower level selectors
describe("RoadsterReducer Selectors", () => {
  // describe("getRoadster", () => {
  // it("should return data", () => {
  // const entities: { [key: number]: Roadster } = {
  //   1: {
  //     id: 1,
  //     title: "TITLE 1",
  //     event_date_utc: "2018-02-06T20:45:00.000Z",
  //     event_date_unix: 2,
  //     flight_number: 3,
  //     details: "DETAILS",
  //     links: {
  //       reddit: "REDDIT",
  //       article: "ARTICLE",
  //       wikipedia: "WIKIPEDIA",
  //     },
  //   },
  // };
  //   const roadster: Roadster[] = [mockRoadster];
  //   const { initialState } = fromRoadster;
  //   const previousState = { ...initialState, roadster };
  //   const slice = fromRoadster.getRoadster(previousState);
  //   expect(slice).toEqual(roadster);
  // });
  // });
  describe("getRoadsterLoading", () => {
    it("should return .loading", () => {
      const { initialState } = fromRoadster;
      const previousState = { ...initialState, loading: true };
      const slice = fromRoadster.getRoadsterLoading(previousState);
      expect(slice).toEqual(true);
    });
  });
  describe("getRoadsterLoaded", () => {
    it("should return .loaded", () => {
      const { initialState } = fromRoadster;
      const previousState = { ...initialState, loaded: true };
      const slice = fromRoadster.getRoadsterLoaded(previousState);
      expect(slice).toEqual(true);
    });
  });
});
