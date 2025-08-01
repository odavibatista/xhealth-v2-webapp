import { TestBed } from '@angular/core/testing';

import { EditAdminInfoService } from './edit-admin-info.service';

describe('EditAdminInfoService', () => {
  let service: EditAdminInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditAdminInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
