import { TestBed } from '@angular/core/testing';

import { NextLaunchService } from './next-launch.service';

describe('NextLaunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextLaunchService = TestBed.get(NextLaunchService);
    expect(service).toBeTruthy();
  });
});
