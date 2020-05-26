import { TestBed } from '@angular/core/testing';

import { SchoolScheduleService } from './school-schedule.service';

describe('SchoolScheduleService', () => {
  let service: SchoolScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
