import { TestBed } from '@angular/core/testing';

import { FindTrainerByIdService } from './find-trainer-by-id.service';

describe('FindTrainerByIdService', () => {
  let service: FindTrainerByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindTrainerByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
