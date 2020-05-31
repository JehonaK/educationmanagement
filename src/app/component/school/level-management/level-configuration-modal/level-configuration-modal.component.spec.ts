import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelConfigurationModalComponent } from './level-configuration-modal.component';

describe('LevelCreationModalComponent', () => {
  let component: LevelConfigurationModalComponent;
  let fixture: ComponentFixture<LevelConfigurationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelConfigurationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelConfigurationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
