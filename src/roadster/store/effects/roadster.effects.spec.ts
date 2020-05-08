import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { Actions } from "@ngrx/effects";

import { hot, cold } from "jasmine-marbles";
import { Observable, empty, of } from "rxjs";

import { RoadsterService } from "../../services/roadster.service";
import * as fromEffects from "./roadster.effects";
import * as fromActions from "../actions/roadster.action";

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe("RoadsterEffects", () => {
  let actions$: TestActions;
  let service: RoadsterService;
  let effects: fromEffects.RoadsterEffects;

  const testData = [
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
      wikipedia: "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
      details:
        "Elon Musk's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX, both companies founded by Elon Musk. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space.",
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RoadsterService,
        fromEffects.RoadsterEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(RoadsterService);
    effects = TestBed.get(fromEffects.RoadsterEffects);

    spyOn(service, "getRequest").and.returnValue(of(testData));
  });

  describe("loadRoadster$", () => {
    it("should return a collection from LoadRoadsterSuccess", () => {
      const action = new fromActions.LoadRoadster();
      const completion = new fromActions.LoadRoadsterSuccess(testData);

      actions$.stream = hot("-a", { a: action });
      const expected = cold("-b", { b: completion });

      expect(effects.loadRoadster$).toBeObservable(expected);
    });
  });
});
