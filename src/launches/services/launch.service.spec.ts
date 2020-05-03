import { TestBed, inject } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient } from "@angular/common/http";
// import { of } from "rxjs";

import { LaunchService } from "./launch.service";

describe("LaunchService", () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        LaunchService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    })
  );

  it("Launch Service", () => {
    const service: LaunchService = TestBed.get(LaunchService);
    expect(service).toBeTruthy();
  });
});
