import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppointmentIconNotificationService } from '../../../services/notification/appointment-icon-notification.service';
import { MatBadgeModule } from '@angular/material/badge';
import { tap } from 'rxjs';

@Component({
  selector: 'app-appointment-icon',
  standalone: true,
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: './appointment-icon.component.html',
  styleUrl: './appointment-icon.component.scss'
})
export class AppointmentIconComponent {
  private _notification = inject(AppointmentIconNotificationService)
  counter!:number

  ngOnInit(): void {
    this._notification.notificationCounter$.subscribe(count=>{ this.counter = count;})
  }

}
