import { TestBed } from '@angular/core/testing';

import { CreateGymService } from './create-gym.service';

describe('CreateGymService', () => {
  let service: CreateGymService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateGymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
