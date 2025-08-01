import { TestBed } from '@angular/core/testing';

import { FindUserByIdService } from './find-user-by-id.service';

describe('FindUserByIdService', () => {
  let service: FindUserByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindUserByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
