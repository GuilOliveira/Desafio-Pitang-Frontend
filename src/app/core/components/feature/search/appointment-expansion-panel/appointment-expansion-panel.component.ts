import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { DatePipe } from '@angular/common';
import { AppointmentModel } from '../../../../models/appointment-model';
import { AppointmentsTableComponent } from '../appointment-table/appointments-table.component';

@Component({
  selector: 'app-appointment-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule, DatePipe, AppointmentsTableComponent],
  templateUrl: './appointment-expansion-panel.component.html',
  styleUrl: './appointment-expansion-panel.component.scss'
})
export class AppointmentExpansionPanelComponent {
  @Input()
  allAppointments: AppointmentModel[][] = []
}
