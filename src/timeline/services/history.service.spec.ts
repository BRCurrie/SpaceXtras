import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient } from "@angular/common/http";
// import { of } from "rxjs";
import { HistoryService } from "./history.service";

describe("HistoryService", () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        HistoryService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    })
  );
  it("should be created", () => {
    const service: HistoryService = TestBed.get(HistoryService);
    expect(service).toBeTruthy();
  });
});
