import { TestBed } from '@angular/core/testing';

import { BrowseUsersService } from './browse-users.service';

describe('BrowseUsersService', () => {
  let service: BrowseUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
