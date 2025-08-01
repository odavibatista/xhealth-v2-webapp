import { TestBed } from '@angular/core/testing';

import { ChangeGymPlanService } from './change-gym-plan.service';

describe('ChangeGymPlanService', () => {
  let service: ChangeGymPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeGymPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
