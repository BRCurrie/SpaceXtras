import { TestBed } from "@angular/core/testing";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { cold } from "jasmine-marbles";

import { TimelineGuard } from "./timeline.guard";

import { History } from "../interfaces/history";

describe("TimelineGuard", () => {
  let guard: TimelineGuard;
  let store: MockStore;

  let testData: History[] = [
    {
      id: 1,
      title: "TITLE",
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
  ];

  const initialState = {
    timelineFeature: {
      events: {
        ids: [1],
        entities: testData,
        loading: false,
        loaded: true,
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [TimelineGuard, provideMockStore({ initialState })],
    });

    store = TestBed.get(MockStore);
    guard = TestBed.get(TimelineGuard);
  });

  // TODO:
  // checkStore()

  it("should return true if the state is loaded", () => {
    const expected = cold("(a|)", { a: true });

    expect(guard.canActivate()).toBeObservable(expected);
  });

  it("should return false if the state is not loaded", () => {
    store.setState({ initialState: { loaded: false } });
    const expected = cold("(a|)", { a: false });

    expect(guard.canActivate()).toBeObservable(expected);
  });
});
