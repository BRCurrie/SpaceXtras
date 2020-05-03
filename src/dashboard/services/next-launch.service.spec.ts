import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient } from "@angular/common/http";
// import { of } from "rxjs";

import { NextLaunchService } from "./next-launch.service";

describe("NextLaunchService", () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        NextLaunchService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    })
  );

  it("should be created", () => {
    const service: NextLaunchService = TestBed.get(NextLaunchService);
    expect(service).toBeTruthy();
  });
});
