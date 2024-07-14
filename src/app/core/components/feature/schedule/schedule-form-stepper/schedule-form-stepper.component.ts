import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormDatePickerComponent } from '../../../shared/form-date-picker/form-date-picker.component';
import { SchedulingService } from '../../../../services/feature/scheduling.service';
import { ScheduleModel } from '../../../../models/schedule-model';
import { formatDate } from '@angular/common';
import { ScheduleFormModel, getEmptyScheduleForm } from '../../../../models/schedule-form-model';
import { take } from 'rxjs';

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
    FormDatePickerComponent,
    MatStepper
    ],
  templateUrl: './schedule-form-stepper.component.html',
  styleUrls: ['./schedule-form-stepper.component.scss']
})
export class ScheduleFormStepperComponent {
  private _schedulingService = inject(SchedulingService)
  private isOnRequest: boolean = false

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

  ngOnInit(): void {
    this.scheduleFormGroup.valueChanges.subscribe(schedule => {
      this._schedulingService.updateSchedulingCache(schedule);
    });
    this.scheduleFormGroup.setValue(this._schedulingService.getScheduleCache())
  }

  clearSecondStep():void{
    this.scheduleFormGroup.get("secondStep")?.setValue({
        scheduleDate: "", 
        scheduleTime: "",
    })
  }

  get firstStepGroup(): FormGroup {
    return this.scheduleFormGroup.get('firstStep') as FormGroup;
  }

  get secondStepGroup(): FormGroup {
    return this.scheduleFormGroup.get('secondStep') as FormGroup;
  }

  submitForm(stepper: MatStepper){
    if(!this.scheduleFormGroup.valid) return
    if(this.isOnRequest) return

    this.isOnRequest = true

    const birthDate = this.scheduleFormGroup.get('firstStep')!.value.birthDate
    const scheduleDate = this.scheduleFormGroup.get('secondStep')!.value.scheduleDate

    const formValue: ScheduleModel = {
      PatientName: this.scheduleFormGroup.get('firstStep')!.value.name,
      PatientBirthDate: formatDate(birthDate, 'yyyy-MM-dd', 'en-US'),
      AppointmentDate: formatDate(scheduleDate, 'yyyy-MM-dd', 'en-US'),
      AppointmentTime: this.scheduleFormGroup.get('secondStep')!.value.scheduleTime+":00"
    };
    this._schedulingService.postScheduling(formValue).pipe(take(1)).subscribe(
      isSubmited => {
        if(isSubmited){
          stepper.reset();
          this.scheduleFormGroup.reset();
          this.isOnRequest = false
        }else{
          this.clearSecondStep()
          this.isOnRequest = false
        }
      }
    )
    
  }
}
