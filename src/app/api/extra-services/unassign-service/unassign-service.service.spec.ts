import { TestBed } from '@angular/core/testing';

import { UnassignServiceService } from './unassign-service.service';

describe('UnassignServiceService', () => {
  let service: UnassignServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnassignServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
