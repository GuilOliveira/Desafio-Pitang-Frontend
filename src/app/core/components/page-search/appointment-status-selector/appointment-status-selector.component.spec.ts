import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentStatusSelectorComponent } from './appointment-status-selector.component';

describe('AppointmentStatusSelectorComponent', () => {
  let component: AppointmentStatusSelectorComponent;
  let fixture: ComponentFixture<AppointmentStatusSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentStatusSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentStatusSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
