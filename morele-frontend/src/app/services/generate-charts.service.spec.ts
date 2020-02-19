import { TestBed } from '@angular/core/testing';

import { GenerateChartsService } from './generate-charts.service';

describe('GenerateChartsService', () => {
  let service: GenerateChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
