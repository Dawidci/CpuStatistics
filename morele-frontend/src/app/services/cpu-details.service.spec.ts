import { TestBed } from '@angular/core/testing';

import { CpuDetailsService } from './cpu-details.service';

describe('CpuDetailsService', () => {
  let service: CpuDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpuDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
