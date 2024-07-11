import { Component, inject } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';
import { Observable } from 'rxjs';
import { BasicAppointmentModel } from '../../../models/basic-appointment-model';
import { AsyncPipe } from '@angular/common';
import { AppointmentExpansionPanelComponent } from '../appointment-expansion-panel/appointment-expansion-panel.component';
import { AppointmentsNotFoundMessageComponent } from '../../appointments-not-found-message/appointments-not-found-message.component';

@Component({
  selector: 'app-all-appointments-container',
  standalone: true,
  imports: [AppointmentExpansionPanelComponent, AppointmentsNotFoundMessageComponent, AsyncPipe],
  templateUrl: './all-appointments-container.component.html',
  styleUrl: './all-appointments-container.component.scss'
})
export class AllAppointmentsContainerComponent {
    private _appointmentService = inject(AppointmentService);
    
    public Appointments$!: Observable<BasicAppointmentModel[][]>;

    ngOnInit(): void {
      this.Appointments$ = this._appointmentService.getAllAppointments();
    }
}
