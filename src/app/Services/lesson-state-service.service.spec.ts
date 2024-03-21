import { TestBed } from '@angular/core/testing';

import { LessonStateServiceService } from './lesson-state-service.service';

describe('LessonStateServiceService', () => {
  let service: LessonStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
