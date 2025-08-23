import { TestBed } from '@angular/core/testing';

import { BrowseUfsService } from './browse-ufs.service';

describe('BrowseUfsService', () => {
  let service: BrowseUfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseUfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
