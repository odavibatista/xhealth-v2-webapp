import { TestBed } from '@angular/core/testing';

import { FindGymPlanByIdService } from './find-gym-plan-by-id.service';

describe('FindGymPlanByIdService', () => {
  let service: FindGymPlanByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindGymPlanByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
