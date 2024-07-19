import { Component, inject, OnInit } from "@angular/core";
import { AppointmentExpansionPanelComponent } from "../appointment-expansion-panel/appointment-expansion-panel.component";
import { AsyncPipe } from "@angular/common";
import { AppointmentsNotFoundComponent } from "../../../shared/appointments-not-found/appointments-not-found.component";
import { AppointmentService } from "../../../../services/feature/appointment.service";
import { Observable } from "rxjs";
import { AppointmentModel } from "../../../../models/appointment/appointment-model";

@Component({
	selector: "app-user-appointments-container",
	standalone: true,
	imports: [AppointmentExpansionPanelComponent, AsyncPipe, AppointmentsNotFoundComponent],
	templateUrl: "./user-appointments-container.component.html",
	styleUrl: "./user-appointments-container.component.scss",
})
export class UserAppointmentsContainerComponent implements OnInit {
	private _appointmentService = inject(AppointmentService);
	public appointments$!: Observable<AppointmentModel[][]>;

	ngOnInit(): void {
		this.loadAppointments();
	}

	loadAppointments(): void {
		this.appointments$ = this._appointmentService.getAppointmentsByUser();
	}
}
