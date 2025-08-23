import { TestBed } from '@angular/core/testing';

import { BrowseTestimoniesService } from './browse-testimonies.service';

describe('BrowseTestimoniesService', () => {
  let service: BrowseTestimoniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseTestimoniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
