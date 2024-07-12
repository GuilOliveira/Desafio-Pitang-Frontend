import { Component, inject } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';
import { Observable } from 'rxjs';
import { BasicAppointmentModel } from '../../../models/basic-appointment-model';
import { AsyncPipe } from '@angular/common';
import { AppointmentExpansionPanelComponent } from '../appointment-expansion-panel/appointment-expansion-panel.component';
import { AppointmentsNotFoundComponent } from "../../appointments-not-found/appointments-not-found.component";

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
