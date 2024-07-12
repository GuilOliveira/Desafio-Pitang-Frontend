import { Component } from '@angular/core';
import { ScheduleFormStepperComponent } from '../../core/components/feature/schedule/schedule-form-stepper/schedule-form-stepper.component';

@Component({
  selector: 'app-appointment-schedule',
  standalone: true,
  imports: [ScheduleFormStepperComponent],
  templateUrl: './appointment-schedule.component.html',
  styleUrl: './appointment-schedule.component.scss'
})
export class AppointmentScheduleComponent {

}
