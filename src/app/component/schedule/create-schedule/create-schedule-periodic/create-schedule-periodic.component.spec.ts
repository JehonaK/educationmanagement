import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchedulePeriodicComponent } from './create-schedule-periodic.component';

describe('CreateSchedulePeriodicComponent', () => {
  let component: CreateSchedulePeriodicComponent;
  let fixture: ComponentFixture<CreateSchedulePeriodicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSchedulePeriodicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchedulePeriodicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
