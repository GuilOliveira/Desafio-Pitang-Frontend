import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AppointmentExpansionPanelComponent } from '../appointment-expansion-panel/appointment-expansion-panel.component';
import { AppointmentsNotFoundComponent } from '../../../shared/appointments-not-found/appointments-not-found.component';
import { AppointmentService } from '../../../../services/appointment.service';
import { BasicAppointmentModel } from '../../../../models/basic-appointment-model';

@Component({
  selector: 'app-all-appointments-container',
  standalone: true,
  imports: [AppointmentExpansionPanelComponent, AsyncPipe, AppointmentsNotFoundComponent],
  templateUrl: './all-appointments-container.component.html',
  styleUrl: './all-appointments-container.component.scss'
})
export class AllAppointmentsContainerComponent {
    private _appointmentService = inject(AppointmentService);
    
    public appointments$!: Observable<BasicAppointmentModel[][]>;

    ngOnInit(): void {
      this.appointments$ = this._appointmentService.getAllAppointments();
    }
}