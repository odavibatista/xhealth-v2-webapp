import { TestBed } from '@angular/core/testing';

import { FindTestimonyByIdService } from './find-testimony-by-id.service';

describe('FindTestimonyByIdService', () => {
  let service: FindTestimonyByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindTestimonyByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
