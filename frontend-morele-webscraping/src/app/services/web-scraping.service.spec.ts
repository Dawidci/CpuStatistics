import { TestBed } from '@angular/core/testing';

import { WebScrapingService } from './web-scraping.service';

describe('WebScrapingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebScrapingService = TestBed.get(WebScrapingService);
    expect(service).toBeTruthy();
  });
});
