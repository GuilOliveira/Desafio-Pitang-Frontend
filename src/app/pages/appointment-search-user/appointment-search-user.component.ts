import { Component } from "@angular/core";
import { AllAppointmentsContainerComponent } from "../../core/components/feature/search/all-appointments-container/all-appointments-container.component";

@Component({
	selector: "app-appointment-search-user",
	standalone: true,
	imports: [AllAppointmentsContainerComponent],
	templateUrl: "./appointment-search-user.component.html",
	styleUrl: "./appointment-search-user.component.scss",
})
export class AppointmentSearchUserComponent {}
