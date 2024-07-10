import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFormStepperComponent } from './schedule-form-stepper.component';

describe('ScheduleFormStepperComponent', () => {
  let component: ScheduleFormStepperComponent;
  let fixture: ComponentFixture<ScheduleFormStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleFormStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleFormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
