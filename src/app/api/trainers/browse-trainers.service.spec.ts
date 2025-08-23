import { TestBed } from '@angular/core/testing';

import { BrowseTrainersService } from './browse-trainers.service';

describe('BrowseTrainersService', () => {
  let service: BrowseTrainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseTrainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
