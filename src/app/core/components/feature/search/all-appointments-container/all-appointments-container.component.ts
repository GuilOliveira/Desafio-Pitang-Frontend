import { Component, inject, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { AppointmentExpansionPanelComponent } from "../appointment-expansion-panel/appointment-expansion-panel.component";
import { AppointmentsNotFoundComponent } from "../../../shared/appointments-not-found/appointments-not-found.component";
import { AppointmentService } from "../../../../services/feature/appointment.service";
import { AppointmentModel } from "../../../../models/appointment-model";

@Component({
	selector: "app-all-appointments-container",
	standalone: true,
	imports: [AppointmentExpansionPanelComponent, AsyncPipe, AppointmentsNotFoundComponent],
	templateUrl: "./all-appointments-container.component.html",
	styleUrl: "./all-appointments-container.component.scss",
})
export class AllAppointmentsContainerComponent implements OnInit {
	private _appointmentService = inject(AppointmentService);
	public appointments$!: Observable<AppointmentModel[][]>;

	ngOnInit(): void {
		this.loadAppointments();
	}

	loadAppointments(): void {
		this.appointments$ = this._appointmentService.getAllAppointments();
	}
}
