import { Component, inject, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { AppointmentIconNotificationService } from "../../../services/cache/appointment-icon-notification.service";
import { MatBadgeModule } from "@angular/material/badge";
import { MatFabButton } from "@angular/material/button";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
	selector: "app-appointment-icon",
	standalone: true,
	imports: [MatIconModule, MatBadgeModule, MatFabButton, RouterLink, RouterLinkActive],
	templateUrl: "./appointment-icon.component.html",
	styleUrl: "./appointment-icon.component.scss",
})
export class AppointmentIconComponent implements OnInit {
	private _notification = inject(AppointmentIconNotificationService);
	counter!: number;

	ngOnInit(): void {
		this._notification.notificationCounter$.subscribe(count => {
			this.counter = count;
		});
	}
}
