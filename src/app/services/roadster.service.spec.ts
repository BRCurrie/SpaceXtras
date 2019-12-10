import { TestBed } from '@angular/core/testing';

import { RoadsterService } from './roadster.service';

describe('RoadsterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoadsterService = TestBed.get(RoadsterService);
    expect(service).toBeTruthy();
  });
});
