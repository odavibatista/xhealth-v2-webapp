import { TestBed } from '@angular/core/testing';

import { BrowseGymsService } from './browse-gyms.service';

describe('BrowseGymsService', () => {
  let service: BrowseGymsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseGymsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
