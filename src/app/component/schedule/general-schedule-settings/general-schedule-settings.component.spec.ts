import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralScheduleSettingsComponent } from './general-schedule-settings.component';

describe('GeneralScheduleSettingsComponent', () => {
  let component: GeneralScheduleSettingsComponent;
  let fixture: ComponentFixture<GeneralScheduleSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralScheduleSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralScheduleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
