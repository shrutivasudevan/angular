import { TestBed, inject } from '@angular/core/testing';

import { CourselistService } from './courselist.service';

describe('CourselistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourselistService]
    });
  });

  it('should be created', inject([CourselistService], (service: CourselistService) => {
    expect(service).toBeTruthy();
  }));
});
