import { TestBed } from '@angular/core/testing';

import { FindModalityByIdService } from './find-modality-by-id.service';

describe('FindModalityByIdService', () => {
  let service: FindModalityByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindModalityByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
