import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScheduleDateBasedComponent } from './create-schedule-date-based.component';

describe('CreateScheduleDateBasedComponent', () => {
  let component: CreateScheduleDateBasedComponent;
  let fixture: ComponentFixture<CreateScheduleDateBasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateScheduleDateBasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScheduleDateBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
