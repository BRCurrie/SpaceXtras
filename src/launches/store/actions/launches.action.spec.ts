import * as fromLaunches from "./launches.action";

// describe the entire test
describe("Launches Actions", () => {
  // nest actions for load, fail, and success
  describe("LoadLaunches Actions", () => {
    describe("LoadLaunches", () => {
      it("should create an action", () => {
        // test if action creates particular object to dispatch from our store.
        // instantiate new action
        const action = new fromLaunches.LoadLaunches();
        // expect(action).toEqual fails because the type is slightly different
        // than what is available. So we spread the action into an object for
        // the test.
        expect({ ...action }).toEqual({
          type: fromLaunches.LOAD_LAUNCHES,
        });
      });
    });
    describe("LoadLaunchesFail", () => {
      it("should create an action", () => {
        // create an error message
        const payload = { message: "Load Error " };
        const action = new fromLaunches.LoadLaunchesFail(payload);

        // add the expected payload of type payload.
        expect({ ...action }).toEqual({
          type: fromLaunches.LOAD_LAUNCHES_FAIL,
          payload,
        });
      });
    });
    // describe("LoadPizzasSuccess", () => {
    //   it("should create an action", () => {
    //     // crate payload as an array of data which is what we expect from the
    //     // api call.
    //     const payload = [
    //       {
    //         name: "Blazin' Inferno",
    //         toppings: [
    //           {
    //             id: 10,
    //             name: "pepperoni",
    //           },
    //           {
    //             id: 9,
    //             name: "pepper",
    //           },
    //         ],
    //         id: 1,
    //       },
    //     ];
    //     const action = new fromPizzas.LoadPizzasSuccess(payload);

    //     expect({ ...action }).toEqual({
    //       type: fromPizzas.LOAD_PIZZAS_SUCCESS,
    //       payload,
    //     });
    //   });
    // });
  });
});
