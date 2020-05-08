import * as fromRoadster from "./roadster.reducer";
import * as fromActions from "../actions/roadster.action";
import { Roadster } from "../../interfaces/roadster";

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
      expect(state.data).toEqual([]);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe("LOAD_ROADSTER_SUCCESS action", () => {
    it("should map an array to entities", () => {
      // expected input.
      const roadster: Roadster[] = [
        {
          name: "Elon Musk's Tesla Roadster",
          launch_date_utc: "2018-02-06T20:45:00.000Z",
          launch_date_unix: 1517949900,
          launch_mass_kg: 1350,
          launch_mass_lbs: 2976,
          norad_id: 43205,
          epoch_jd: 2458366.482893519,
          orbit_type: "heliocentric",
          apoapsis_au: 1.663752666195018,
          periapsis_au: 0.9860753850280967,
          semi_major_axis_au: 137.6352649527045,
          eccentricity: 0.2557438701934329,
          inclination: 1.077489463372395,
          longitude: 317.0956890012447,
          periapsis_arg: 177.4902539777412,
          period_days: 557.0317797709337,
          speed_kph: 75139.344,
          speed_mph: 46689.409320624,
          earth_distance_km: 194902757.14697537,
          earth_distance_mi: 121106921.11117323,
          mars_distance_km: 159204213.85950035,
          mars_distance_mi: 98924881.57009159,
          wikipedia:
            "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
          details:
            "Elon Musk's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX, both companies founded by Elon Musk. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space.",
        },
      ];
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

      expect(state.data).toEqual(roadster);
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
  // TODO: fix this... technically it's passing. maybe I should have made it entity...
  // describe("getRoadster", () => {
  //   it("should return data", () => {
  //     // const entities: { [key: number]: Roadster } = {
  //     //   1: {
  //     //     id: 1,
  //     //     title: "TITLE 1",
  //     //     event_date_utc: "2018-02-06T20:45:00.000Z",
  //     //     event_date_unix: 2,
  //     //     flight_number: 3,
  //     //     details: "DETAILS",
  //     //     links: {
  //     //       reddit: "REDDIT",
  //     //       article: "ARTICLE",
  //     //       wikipedia: "WIKIPEDIA",
  //     //     },
  //     //   },

  //     // };
  //     const roadster: Roadster[] = [
  //       {
  //         name: "Elon Musk's Tesla Roadster",
  //         launch_date_utc: "2018-02-06T20:45:00.000Z",
  //         launch_date_unix: 1517949900,
  //         launch_mass_kg: 1350,
  //         launch_mass_lbs: 2976,
  //         norad_id: 43205,
  //         epoch_jd: 2458366.482893519,
  //         orbit_type: "heliocentric",
  //         apoapsis_au: 1.663752666195018,
  //         periapsis_au: 0.9860753850280967,
  //         semi_major_axis_au: 137.6352649527045,
  //         eccentricity: 0.2557438701934329,
  //         inclination: 1.077489463372395,
  //         longitude: 317.0956890012447,
  //         periapsis_arg: 177.4902539777412,
  //         period_days: 557.0317797709337,
  //         speed_kph: 75139.344,
  //         speed_mph: 46689.409320624,
  //         earth_distance_km: 194902757.14697537,
  //         earth_distance_mi: 121106921.11117323,
  //         mars_distance_km: 159204213.85950035,
  //         mars_distance_mi: 98924881.57009159,
  //         wikipedia:
  //           "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
  //         details:
  //           "Elon Musk's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX, both companies founded by Elon Musk. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space.",
  //       },
  //     ];
  //     const { initialState } = fromRoadster;
  //     const previousState = { ...initialState, roadster };
  //     const slice = fromRoadster.getRoadster(previousState);
  //     expect(slice).toEqual(roadster);
  //   });
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
