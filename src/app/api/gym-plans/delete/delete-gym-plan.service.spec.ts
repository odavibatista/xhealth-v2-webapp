import { TestBed } from '@angular/core/testing';

import { DeleteGymPlanService } from './delete-gym-plan.service';

describe('DeleteGymPlanService', () => {
  let service: DeleteGymPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteGymPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
