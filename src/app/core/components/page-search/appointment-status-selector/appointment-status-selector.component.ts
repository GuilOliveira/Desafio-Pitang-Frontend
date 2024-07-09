import { Component, Input } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-appointment-status-selector',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './appointment-status-selector.component.html',
  styleUrl: './appointment-status-selector.component.scss'
})
export class AppointmentStatusSelectorComponent {
  selected = 'waiting';
}
