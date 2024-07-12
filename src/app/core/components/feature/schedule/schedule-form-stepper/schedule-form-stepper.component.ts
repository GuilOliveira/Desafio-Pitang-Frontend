import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormDatePickerComponent } from '../../../shared/form-date-picker/form-date-picker.component';

@Component({
  selector: 'app-schedule-form-stepper',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormDatePickerComponent
    ],
  templateUrl: './schedule-form-stepper.component.html',
  styleUrls: ['./schedule-form-stepper.component.scss']
})
export class ScheduleFormStepperComponent {
  scheduleFormGroup: FormGroup;
  validTimeOptions: string[] = ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];


  constructor(private _formBuilder: FormBuilder) {
    this.scheduleFormGroup = this._formBuilder.group({
      firstStep: this._formBuilder.group({
        name: ['', Validators.required],
        birthDate: ['', Validators.required]
      }),
      secondStep: this._formBuilder.group({
        scheduleDate: ['', Validators.required],
        scheduleTime: ['', Validators.required]
      })
    });
  }

  get firstStepGroup(): FormGroup {
    return this.scheduleFormGroup.get('firstStep') as FormGroup;
  }

  get secondStepGroup(): FormGroup {
    return this.scheduleFormGroup.get('secondStep') as FormGroup;
  }

  submitForm(){
    const formValue = {
      ...this.scheduleFormGroup.get('firstStep')!.value,
      ...this.scheduleFormGroup.get('secondStep')!.value,
    };
    console.log(formValue);
  }
}