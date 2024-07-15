import { Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { DatePipe } from '@angular/common';
import { AppointmentModel } from '../../../../models/appointment-model';
import { AppointmentsTableComponent } from '../appointment-table/appointments-table.component';
import { AppointmentService } from '../../../../services/feature/appointment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appointment-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule, DatePipe, AppointmentsTableComponent],
  templateUrl: './appointment-expansion-panel.component.html',
  styleUrl: './appointment-expansion-panel.component.scss'
})
export class AppointmentExpansionPanelComponent implements OnInit, OnDestroy {
  private _appointmentService = inject(AppointmentService)
  private subscription!: Subscription;
  @Input()
  allAppointments: AppointmentModel[][] = []

  ngOnInit(): void {
    this.subscription = this._appointmentService.deletedAppointment$.subscribe(
      id => {this.handleAppointmentDelete(id);}
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleAppointmentDelete(id: number):void{
    console.log(this.allAppointments)
    this.allAppointments = this.allAppointments.map(appointmentList =>
      appointmentList.filter(appointment => appointment.id !== id)).
      filter(appointmentList => appointmentList.length > 0);
    console.log(this.allAppointments)
  }
}
