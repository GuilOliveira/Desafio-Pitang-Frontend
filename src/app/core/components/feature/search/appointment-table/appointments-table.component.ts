import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppointmentStatusSelectorComponent } from '../appointment-status-selector/appointment-status-selector.component';
import { BasicAppointmentModel } from '../../../../models/basic-appointment-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointments-table',
  standalone: true,
  imports: [MatTableModule, AppointmentStatusSelectorComponent, DatePipe],
  templateUrl: './appointments-table.component.html',
  styleUrl: './appointments-table.component.scss'
})
export class AppointmentsTableComponent {
  @Input() appointments: BasicAppointmentModel[] = [];

  displayedColumns: string[] = ['date', 'time', 'name', 'status'];
}
