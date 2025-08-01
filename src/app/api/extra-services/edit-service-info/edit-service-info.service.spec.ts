import { TestBed } from '@angular/core/testing';

import { EditServiceInfoService } from './edit-service-info.service';

describe('EditServiceInfoService', () => {
  let service: EditServiceInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditServiceInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
