import { Component } from "@angular/core";
import { UserAppointmentsContainerComponent } from "../../core/components/feature/search/user-appointments-container/user-appointments-container.component";

@Component({
	selector: "app-appointment-search-user",
	standalone: true,
	imports: [UserAppointmentsContainerComponent],
	templateUrl: "./appointment-search-user.component.html",
	styleUrl: "./appointment-search-user.component.scss",
})
export class AppointmentSearchUserComponent {}
