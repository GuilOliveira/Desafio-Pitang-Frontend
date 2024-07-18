import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@Component({
	selector: "app-register",
	standalone: true,
	imports: [
		CommonModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSelectModule,
		MatLabel,
		MatButtonModule,
	],
	templateUrl: "./register.component.html",
	styleUrl: "./register.component.scss",
})
export class RegisterComponent {
	registerForm!: FormGroup;

	constructor(private _formBuilder: FormBuilder) {
		this.registerForm = this._formBuilder.group({
			email: ["", [Validators.required, Validators.email]],
			name: ["", [Validators.required, this.noNumbersValidator]],
			password: ["", [Validators.required, Validators.minLength(6)]],
			profile: ["", [Validators.required, this.profileValidator]],
		});
	}

	getFormControl(controlName: string) {
		return this.registerForm.get(controlName);
	}

	noNumbersValidator(control: FormControl): Record<string, boolean> | null {
		const hasNumber = /\d/.test(control.value);
		return hasNumber ? { containsNumber: true } : null;
	}

	profileValidator(control: FormControl): Record<string, boolean> | null {
		const validProfiles = ["admin", "comum"];
		return validProfiles.includes(control.value) ? null : { invalidProfile: true };
	}

	onSubmit() {
		if (this.registerForm.valid) {
			console.log("Form Submitted", this.registerForm.value);
		} else {
			console.log("Form is invalid");
		}
	}
}