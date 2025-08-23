import { TestBed } from '@angular/core/testing';

import { BrowseModalitiesService } from './browse-modalities.service';

describe('BrowseModalitiesService', () => {
  let service: BrowseModalitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseModalitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
