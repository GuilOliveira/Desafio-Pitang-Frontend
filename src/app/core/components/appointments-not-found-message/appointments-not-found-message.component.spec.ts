import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsNotFoundMessageComponent } from './appointments-not-found-message.component';

describe('AppointmentsNotFoundMessageComponent', () => {
  let component: AppointmentsNotFoundMessageComponent;
  let fixture: ComponentFixture<AppointmentsNotFoundMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsNotFoundMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsNotFoundMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
