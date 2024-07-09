import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-appointment-date-range',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule],
  templateUrl: './appointment-date-range.component.html',
  styleUrl: './appointment-date-range.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentDateRangeComponent {

}
