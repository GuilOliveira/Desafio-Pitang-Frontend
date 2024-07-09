import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppointmentStatusSelectorComponent } from '../appointment-status-selector/appointment-status-selector.component';
import { BasicAppointmentModel } from '../../../models/basic-appointment-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointments-table',
  standalone: true,
  imports: [MatTableModule, AppointmentStatusSelectorComponent, DatePipe],
  templateUrl: './appointments-table.component.html',
  styleUrl: './appointments-table.component.scss'
})
export class AppointmentsTableComponent {

  ELEMENT_DATA: BasicAppointmentModel[] = [
    {id:1, date: new Date("2024-07-07"), time:"13:00:00", name: "Guilherme", status:"waiting"},
    {id:1, date: new Date("2024-07-07"), time:"13:00:00", name: "Guilherme", status:"accomplished"}
  ];

  displayedColumns: string[] = ['date', 'time', 'name', 'status'];
  dataSource = this.ELEMENT_DATA;
}
