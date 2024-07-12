import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentExpansionPanelComponent } from '../appointment-expansion-panel/appointment-expansion-panel.component';
import { AsyncPipe } from '@angular/common';
import { NotificationService } from '../../../../services/notification.service';
import { AppointmentService } from '../../../../services/appointment.service';
import { Observable } from 'rxjs';
import { BasicAppointmentModel } from '../../../../models/basic-appointment-model';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AppointmentsNotFoundComponent } from '../../../shared/appointments-not-found/appointments-not-found.component';

@Component({
  selector: 'app-appointment-filter-container',
  standalone: true,
  imports: [MatFormFieldModule,
            MatDatepickerModule,
            MatButtonModule,
            ReactiveFormsModule,
            MatToolbar,
            AppointmentExpansionPanelComponent,
            AsyncPipe,
            AppointmentsNotFoundComponent],
  templateUrl: './appointment-filter-container.component.html',
  styleUrl: './appointment-filter-container.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppointmentFilterContainerComponent {
  private _notificationService = inject(NotificationService)
  private _appointmentService = inject(AppointmentService)

  appointments$!: Observable<BasicAppointmentModel[][]>;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });
  }
  submit(): void {
    const { startDate, endDate } = this.searchForm.value;
    if (!this.checkValid(startDate, endDate)) return
    if (!this.checkOrdered(startDate, endDate)) return
    this.appointments$ = this._appointmentService.getFilteredAppointments(startDate, endDate);
  }

  checkValid(startDate:string, endDate:string): boolean {
    if(isNaN(Date.parse(startDate)) && isNaN(Date.parse(endDate))){
      this._notificationService.showError("A data inserida deve ser válida.");
      return false;
    }
    return true
  }

  checkOrdered(startDate:string, endDate:string): boolean {
    if(startDate > endDate){
      this._notificationService.showError("A data inicial deve ser menor ou igual à data final.");
      return false;
    }
    return true;
  }
}
