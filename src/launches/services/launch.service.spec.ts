import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient } from "@angular/common/http";

import { LaunchService } from "./launch.service";
import { HttpService } from "../../shared/services/http/http.service";

describe("LaunchService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: LaunchService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        LaunchService,
        HttpService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new LaunchService(<any>httpClientSpy);
  });

  it("Launch Service", () => {
    const service: LaunchService = TestBed.get(LaunchService);
    expect(service).toBeTruthy();
  });

  it("getRequest should be executable", () => {
    spyOn(service, "getRequest");
    service.getRequest();
    expect(service.getRequest).toHaveBeenCalled();
  });
});
