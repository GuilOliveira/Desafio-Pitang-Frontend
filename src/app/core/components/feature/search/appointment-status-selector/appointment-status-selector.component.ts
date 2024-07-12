import { Component, EventEmitter, inject, Input } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppointmentService } from '../../../../services/appointment.service';
import { AppointmentStatusUpdateModel } from '../../../../models/appointment-status-update-model';

@Component({
  selector: 'app-appointment-status-selector',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './appointment-status-selector.component.html',
  styleUrl: './appointment-status-selector.component.scss'
})
export class AppointmentStatusSelectorComponent {
private _appointmentService = inject(AppointmentService)

  @Input() appointmentStatus!: string;
  @Input() appointmentId!: number;
  
  onStatusChange(): void {
    const statusModel: AppointmentStatusUpdateModel = {Id: this.appointmentId, Status: this.appointmentStatus}
    this._appointmentService.updateAppointment(statusModel)
  }
}
