import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-appointment-filter-container',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './appointment-filter-container.component.html',
  styleUrl: './appointment-filter-container.component.scss'
})
export class AppointmentFilterContainerComponent {

}
