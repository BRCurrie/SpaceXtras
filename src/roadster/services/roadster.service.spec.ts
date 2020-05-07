import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";

import { RoadsterService } from "./roadster.service";
import { HttpService } from "../../shared/services/http/http.service";

describe("RoadsterService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: RoadsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        RoadsterService,
        HttpService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new RoadsterService(<any>httpClientSpy);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getRequest should be executable", () => {
    spyOn(service, "getRequest");
    service.getRequest();
    expect(service.getRequest).toHaveBeenCalled();
  });
});
