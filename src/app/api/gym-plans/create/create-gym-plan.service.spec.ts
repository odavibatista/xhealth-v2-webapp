import { TestBed } from '@angular/core/testing';

import { CreateGymPlanService } from './create-gym-plan.service';

describe('CreateGymPlanService', () => {
  let service: CreateGymPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateGymPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
