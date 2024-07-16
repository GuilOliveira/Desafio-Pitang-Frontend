import { Component, Input } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { AppointmentStatusSelectorComponent } from "../appointment-status-selector/appointment-status-selector.component";
import { AppointmentModel } from "../../../../models/appointment-model";
import { DatePipe } from "@angular/common";
import { DeleteAppointmentButtonComponent } from "../delete-appointment-button/delete-appointment-button.component";

@Component({
	selector: "app-appointments-table",
	standalone: true,
	imports: [MatTableModule, AppointmentStatusSelectorComponent, DatePipe, DeleteAppointmentButtonComponent],
	templateUrl: "./appointments-table.component.html",
	styleUrl: "./appointments-table.component.scss",
})
export class AppointmentsTableComponent {
	@Input() appointments: AppointmentModel[] = [];

	displayedColumns: string[] = ["date", "time", "name", "status"];
}
