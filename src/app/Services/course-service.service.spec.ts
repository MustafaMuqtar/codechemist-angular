import { TestBed } from '@angular/core/testing';

import { CourseServiceService } from './course-service.service';

describe('TechnologyServiceService', () => {
  let service: CourseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
