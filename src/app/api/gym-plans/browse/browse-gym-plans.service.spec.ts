import { TestBed } from '@angular/core/testing';

import { BrowseGymPlansService } from './browse-gym-plans.service';

describe('BrowseGymPlansService', () => {
  let service: BrowseGymPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseGymPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
