import { TestBed } from '@angular/core/testing';

import { CpuDetailsService } from './cpu-details.service';

describe('CpuDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpuDetailsService = TestBed.get(CpuDetailsService);
    expect(service).toBeTruthy();
  });
});
