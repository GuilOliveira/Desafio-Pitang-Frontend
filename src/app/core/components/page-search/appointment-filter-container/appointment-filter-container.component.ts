import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppointmentDateRangeComponent } from "../appointment-date-range/appointment-date-range.component";


@Component({
  selector: 'app-appointment-filter-container',
  standalone: true,
  imports: [MatToolbarModule, AppointmentDateRangeComponent],
  templateUrl: './appointment-filter-container.component.html',
  styleUrl: './appointment-filter-container.component.scss'
})
export class AppointmentFilterContainerComponent {

}
