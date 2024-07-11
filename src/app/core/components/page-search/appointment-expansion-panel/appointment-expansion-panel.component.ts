import { Component, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppointmentsTableComponent } from '../appointment-table/appointments-table.component';
import { BasicAppointmentModel } from '../../../models/basic-appointment-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointment-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule, AppointmentsTableComponent, DatePipe],
  templateUrl: './appointment-expansion-panel.component.html',
  styleUrl: './appointment-expansion-panel.component.scss'
})
export class AppointmentExpansionPanelComponent {
  @Input()
  AllAppointments: BasicAppointmentModel[][] = []
}
