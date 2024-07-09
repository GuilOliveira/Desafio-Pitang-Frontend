import { Component } from '@angular/core';
import { AppointmentsTableComponent } from '../../core/components/appointments-table/appointments-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppointmentsTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
