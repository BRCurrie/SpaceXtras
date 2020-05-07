import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient } from "@angular/common/http";

import { NextLaunchService } from "./next-launch.service";
import { HttpService } from "../../shared/services/http/http.service";

describe("NextLaunchService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: NextLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        NextLaunchService,
        HttpService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new NextLaunchService(<any>httpClientSpy);
  });

  it("should be created", () => {
    const service: NextLaunchService = TestBed.get(NextLaunchService);
    expect(service).toBeTruthy();
  });

  it("getRequest should be executable", () => {
    spyOn(service, "getRequest");
    service.getRequest();
    expect(service.getRequest).toHaveBeenCalled();
  });
});
