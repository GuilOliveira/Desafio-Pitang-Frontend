import { ChangeDetectionStrategy, Component, Input, forwardRef } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { provideNativeDateAdapter } from "@angular/material/core";
import {
	ControlValueAccessor,
	NG_VALUE_ACCESSOR,
	FormControl,
	FormsModule,
	ReactiveFormsModule,
} from "@angular/forms";

@Component({
	selector: "app-form-date-picker",
	standalone: true,
	providers: [
		provideNativeDateAdapter(),
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FormDatePickerComponent),
			multi: true,
		},
	],
	imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule, FormsModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./form-date-picker.component.html",
	styleUrls: ["./form-date-picker.component.scss"],
})
export class FormDatePickerComponent implements ControlValueAccessor {
	@Input() defaultMessage = "Escolha uma data";
	@Input() formControlName = "";
	@Input() isPastPrevent = false;
	@Input() isFuturePrevent = false;

	pastPreventFilter = (date: Date | null): boolean => {
		if (!date) return false;
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		date.setHours(0, 0, 0, 0);
		return date >= today;
	};

	futurePreventFilter = (date: Date | null): boolean => {
		if (!date) return false;
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		date.setHours(0, 0, 0, 0);
		return date <= today;
	};

	noFilter = (): boolean => {
		return true;
	};

	private _onChange: (value: Date | null) => void = () => {
		return;
	};
	private _onTouched: () => void = () => {
		return;
	};
	control = new FormControl();

	writeValue(value: Date | null): void {
		this.control.setValue(value);
	}

	registerOnChange(fn: (value: Date | null) => void): void {
		this._onChange = fn;
		this.control.valueChanges.subscribe(value => this._onChange(value));
	}

	registerOnTouched(fn: () => void): void {
		this._onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		if (isDisabled) {
			this.control.disable();
		} else {
			this.control.enable();
		}
	}
}
