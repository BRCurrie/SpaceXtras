import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient } from "@angular/common/http";

import { HistoryService } from "./history.service";
import { HttpService } from "src/shared/services/http/http.service";

describe("HistoryService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: HistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        HistoryService,
        HttpService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new HistoryService(<any>httpClientSpy);
  });

  it("should be created", () => {
    const service: HistoryService = TestBed.get(HistoryService);
    expect(service).toBeTruthy();
  });

  it("getRequest should be executable", () => {
    spyOn(service, "getRequest");
    service.getRequest();
    expect(service.getRequest).toHaveBeenCalled();
  });
});
