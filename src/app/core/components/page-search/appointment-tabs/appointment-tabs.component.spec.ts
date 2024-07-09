import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTabsComponent } from './appointment-tabs.component';

describe('AppointmentTabsComponent', () => {
  let component: AppointmentTabsComponent;
  let fixture: ComponentFixture<AppointmentTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
