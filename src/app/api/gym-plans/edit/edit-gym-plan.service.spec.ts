import { TestBed } from '@angular/core/testing';

import { EditGymPlanService } from './edit-gym-plan.service';

describe('EditGymPlanService', () => {
  let service: EditGymPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditGymPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
