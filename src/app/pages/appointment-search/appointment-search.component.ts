import { Component } from '@angular/core';
import { AppointmentTabsComponent } from '../../core/components/page-search/appointment-tabs/appointment-tabs.component';

@Component({
  selector: 'app-appointment-search',
  standalone: true,
  imports: [AppointmentTabsComponent],
  templateUrl: './appointment-search.component.html',
  styleUrl: './appointment-search.component.scss'
})
export class AppointmentSearchComponent {

}
