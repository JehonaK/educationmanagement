import { TestBed } from '@angular/core/testing';

import { SchoolSubjectService } from './school-subject.service';

describe('SubjectService', () => {
  let service: SchoolSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
