import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { defer } from "rxjs";

import { HttpService } from "./http.service";

import { History } from "../../../timeline/interfaces/history";

describe("HttpService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: HttpService<History>;
  // to test the url against a value.
  let testString: string = "Test String";

  let testData: History[] = [
    {
      id: 1,
      title: "string",
      event_date_utc: "string",
      event_date_unix: 2,
      flight_number: 3,
      details: "string",
      links: {
        reddit: "string",
        article: "string",
        wikipedia: "string",
      },
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        HttpService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    }),
      (httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]));
    service = new HttpService(<any>httpClientSpy, testString);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getRequest should be executable", () => {
    spyOn(service, "getRequest");
    service.getRequest();
    expect(service.getRequest).toHaveBeenCalled();
  });

  it("should return data", (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(asyncData(testData));

    service.getRequest().subscribe((history) => {
      expect(history).toEqual(testData, "expected data");
      done();
    });
  });

  it("handleError should be executable", () => {
    const errorResponse = new HttpErrorResponse({
      error: "404 error",
      status: 404,
      statusText: "Not Found",
    });
    spyOn(service, "handleError");
    service.handleError(errorResponse);
    expect(service.handleError).toHaveBeenCalled();
  });

  // TODO:
  // retry()
  // handleError()

  // it("should retry three times", (done: DoneFn) => {
  //   let emsg = "intentional 404";
  //   httpClientSpy.get.and.returnValues(
  //     asyncError(emsg),
  //     asyncError(emsg),
  //     asyncData(testData)
  //   );
  //   service.getRequest().subscribe((roadster) => {
  //     expect(roadster).toEqual(testData, "expected data");
  //     done();
  //   });
  // });

  // it("should call handleError()", () => {
  //   let emsg = "intentional 404";
  //   httpClientSpy.get.and.returnValue(asyncError(emsg));
  //   service.getRoadster().subscribe(
  //     (res) => fail,
  //     (error) => {
  //       expect(error).toEqual(
  //         "Something bad happened; please try again later."
  //       );
  //     }
  //   );
  // });
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}
