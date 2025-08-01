import { TestBed } from '@angular/core/testing';

import { FindGymByIdService } from './find-gym-by-id.service';

describe('FindGymByIdService', () => {
  let service: FindGymByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindGymByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
