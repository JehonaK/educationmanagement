import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassConfigurationModalComponent } from './school-class-configuration-modal.component';

describe('SchoolClassConfigurationModalComponent', () => {
  let component: SchoolClassConfigurationModalComponent;
  let fixture: ComponentFixture<SchoolClassConfigurationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolClassConfigurationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassConfigurationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
