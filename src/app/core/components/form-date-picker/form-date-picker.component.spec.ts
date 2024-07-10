import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatePickerComponent } from './form-date-picker.component';

describe('FormDatePickerComponent', () => {
  let component: FormDatePickerComponent;
  let fixture: ComponentFixture<FormDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
