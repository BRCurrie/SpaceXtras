import * as fromEvents from "./events.action";

describe("Events Actions", () => {
  describe("LoadEvents", () => {
    it("should create an action", () => {
      const action = new fromEvents.LoadEvents();

      expect({ ...action }).toEqual({
        type: fromEvents.LOAD_EVENTS,
      });
    });
  });
  describe("LoadEventsFail", () => {
    it("should create an action", () => {
      const payload = { message: "Load Error " };
      const action = new fromEvents.LoadEventsFail(payload);

      expect({ ...action }).toEqual({
        type: fromEvents.LOAD_EVENTS_FAIL,
        payload,
      });
    });
  });

  describe("LoadEventsSuccess", () => {
    it("should create an action", () => {
      const payload = [
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
      const action = new fromEvents.LoadEventsSuccess(payload);

      expect({ ...action }).toEqual({
        type: fromEvents.LOAD_EVENTS_SUCCESS,
        payload,
      });
    });
  });
});
