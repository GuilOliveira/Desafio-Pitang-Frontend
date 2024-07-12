import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsNotFoundComponent } from './appointments-not-found.component';

describe('AppointmentsNotFoundComponent', () => {
  let component: AppointmentsNotFoundComponent;
  let fixture: ComponentFixture<AppointmentsNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
