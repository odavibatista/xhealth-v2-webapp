import { TestBed } from '@angular/core/testing';

import { EditGymInfoService } from './edit-gym-info.service';

describe('EditGymInfoService', () => {
  let service: EditGymInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditGymInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
