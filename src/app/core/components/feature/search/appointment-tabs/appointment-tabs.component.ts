import { Component } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { AppointmentExpansionPanelComponent } from "../appointment-expansion-panel/appointment-expansion-panel.component";
import { AppointmentFilterContainerComponent } from "../appointment-filter-container/appointment-filter-container.component";
import { AsyncPipe } from "@angular/common";
import { AllAppointmentsContainerComponent } from "../all-appointments-container/all-appointments-container.component";

@Component({
	selector: "app-appointment-tabs",
	standalone: true,
	imports: [
		MatTabsModule,
		AppointmentExpansionPanelComponent,
		AppointmentFilterContainerComponent,
		AsyncPipe,
		AllAppointmentsContainerComponent,
	],
	templateUrl: "./appointment-tabs.component.html",
	styleUrl: "./appointment-tabs.component.scss",
})
export class AppointmentTabsComponent {}
