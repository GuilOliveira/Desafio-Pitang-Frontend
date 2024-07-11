import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppointmentsContainerComponent } from './all-appointments-container.component';

describe('AllAppointmentsContainerComponent', () => {
  let component: AllAppointmentsContainerComponent;
  let fixture: ComponentFixture<AllAppointmentsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAppointmentsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAppointmentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
