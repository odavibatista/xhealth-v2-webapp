import { TestBed } from '@angular/core/testing';

import { BrowseAdminsService } from './browse-admins.service';

describe('BrowseAdminsService', () => {
  let service: BrowseAdminsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseAdminsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
