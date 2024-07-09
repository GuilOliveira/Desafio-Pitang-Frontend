import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentExpansionPanelComponent } from './appointment-expansion-panel.component';

describe('AppointmentExpansionPanelComponent', () => {
  let component: AppointmentExpansionPanelComponent;
  let fixture: ComponentFixture<AppointmentExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentExpansionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
