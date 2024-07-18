import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@Component({
	selector: "app-login",
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
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
})
export class LoginComponent {
	registerForm!: FormGroup;

	constructor(private _formBuilder: FormBuilder) {
		this.registerForm = this._formBuilder.group({
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(6)]],
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
