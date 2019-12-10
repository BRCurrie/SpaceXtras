import { TestBed } from '@angular/core/testing';

import { CapsulesService } from './capsules.service';

describe('CapsulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapsulesService = TestBed.get(CapsulesService);
    expect(service).toBeTruthy();
  });
});
