import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDateRangeComponent } from './appointment-date-range.component';

describe('AppointmentDateRangeComponent', () => {
  let component: AppointmentDateRangeComponent;
  let fixture: ComponentFixture<AppointmentDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentDateRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
