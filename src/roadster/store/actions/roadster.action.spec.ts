import * as fromRoadster from "./roadster.action";
import { mockRoadster } from "src/testing/mock-roadster";

describe("Roadster Actions", () => {
  describe("LoadRoadster", () => {
    it("should create an action", () => {
      const action = new fromRoadster.LoadRoadster();

      expect({ ...action }).toEqual({
        type: fromRoadster.LOAD_ROADSTER,
      });
    });
  });
  describe("LoadRoadsterFail", () => {
    it("should create an action", () => {
      const payload = { message: "Load Error " };
      const action = new fromRoadster.LoadRoadsterFail(payload);

      expect({ ...action }).toEqual({
        type: fromRoadster.LOAD_ROADSTER_FAIL,
        payload,
      });
    });
  });

  describe("LoadRoadsterSuccess", () => {
    it("should create an action", () => {
      const payload = [mockRoadster];
      const action = new fromRoadster.LoadRoadsterSuccess(payload);

      expect({ ...action }).toEqual({
        type: fromRoadster.LOAD_ROADSTER_SUCCESS,
        payload,
      });
    });
  });
});
