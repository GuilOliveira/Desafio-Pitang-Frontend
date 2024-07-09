import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppointmentsTableComponent } from '../appointment-table/appointments-table.component';

@Component({
  selector: 'app-appointment-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule, AppointmentsTableComponent],
  templateUrl: './appointment-expansion-panel.component.html',
  styleUrl: './appointment-expansion-panel.component.scss'
})
export class AppointmentExpansionPanelComponent {
  
}
