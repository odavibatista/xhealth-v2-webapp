import { TestBed } from '@angular/core/testing';

import { FindAdminByIdService } from './find-admin-by-id.service';

describe('FindAdminByIdService', () => {
  let service: FindAdminByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindAdminByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
