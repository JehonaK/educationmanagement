import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelCreationModalComponent } from './level-creation-modal.component';

describe('LevelCreationModalComponent', () => {
  let component: LevelCreationModalComponent;
  let fixture: ComponentFixture<LevelCreationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelCreationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelCreationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
