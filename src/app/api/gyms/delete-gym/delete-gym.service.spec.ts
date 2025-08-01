import { TestBed } from '@angular/core/testing';

import { DeleteGymService } from './delete-gym.service';

describe('DeleteGymService', () => {
  let service: DeleteGymService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteGymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
