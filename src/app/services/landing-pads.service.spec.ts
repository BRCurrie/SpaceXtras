import { TestBed } from '@angular/core/testing';

import { LandingPadsService } from './landing-pads.service';

describe('LandingPadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandingPadsService = TestBed.get(LandingPadsService);
    expect(service).toBeTruthy();
  });
});
