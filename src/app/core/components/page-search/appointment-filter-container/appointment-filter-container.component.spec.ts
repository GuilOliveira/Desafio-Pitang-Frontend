import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentFilterContainerComponent } from './appointment-filter-container.component';

describe('AppointmentFilterContainerComponent', () => {
  let component: AppointmentFilterContainerComponent;
  let fixture: ComponentFixture<AppointmentFilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentFilterContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
