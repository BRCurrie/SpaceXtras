import { TestBed } from "@angular/core/testing";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { cold } from "jasmine-marbles";

import { TimelineGuard } from "./timeline.guard";

describe("TimelineGuard", () => {
  let guard: TimelineGuard;
  let store: MockStore;

  const initialState = { loaded: true };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [TimelineGuard, provideMockStore({ initialState })],
    });

    store = TestBed.get(MockStore);
    guard = TestBed.get(TimelineGuard);
  });

  it("should return false if the state is not loaded", () => {
    store.setState({ initialState: { loaded: false } });

    const expected = cold("(a|)", { a: false });

    expect(guard.canActivate()).toBeObservable(expected);
  });

  it("should return true if the state is loaded", () => {
    store.setState({ initialState: { loaded: true } });
    store.refreshState();
    const expected = cold("(a|)", { a: true });

    expect(guard.canActivate()).toBeObservable(expected);
  });
});
