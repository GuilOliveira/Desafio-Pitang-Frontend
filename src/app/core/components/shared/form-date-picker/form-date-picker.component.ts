import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter, DateAdapter } from '@angular/material/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-date-picker',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDatePickerComponent),
      multi: true
    }
  ],
  imports: [
            MatFormFieldModule, 
            MatInputModule, 
            MatDatepickerModule, 
            ReactiveFormsModule, 
            FormsModule
            ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-date-picker.component.html',
  styleUrls: ['./form-date-picker.component.scss']
})
export class FormDatePickerComponent implements ControlValueAccessor {
  @Input() defaultMessage = "Escolha uma data";
  @Input() formControlName = "";

  private _onChange: (value: any) => void = () => {};
  private _onTouched: () => void = () => {};
  control = new FormControl();

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
    this.control.valueChanges.subscribe(this._onChange);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
}
