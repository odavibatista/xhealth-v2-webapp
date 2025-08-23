import { TestBed } from '@angular/core/testing';

import { BrowseServicesService } from './browse-services.service';

describe('BrowseServicesService', () => {
  let service: BrowseServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
