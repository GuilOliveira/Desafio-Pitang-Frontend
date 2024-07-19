import { Component, inject, Input, OnInit } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppointmentService } from "../../../../services/feature/appointment.service";
import { AppointmentStatusUpdateModel } from "../../../../models/appointment/appointment-status-update-model";
import { take } from "rxjs";
import { TokenService } from "../../../../services/auth/token.service";

@Component({
	selector: "app-appointment-status-selector",
	standalone: true,
	imports: [MatFormFieldModule, MatSelectModule],
	templateUrl: "./appointment-status-selector.component.html",
	styleUrl: "./appointment-status-selector.component.scss",
})
export class AppointmentStatusSelectorComponent implements OnInit {
	private _appointmentService = inject(AppointmentService);
	private _tokenService = inject(TokenService);

	@Input() appointmentStatus!: string;
	@Input() appointmentId!: number;
	@Input() creatorId!: number;
	lastStatus!: string;
	userId!: number;
	userRole!: string;

	ngOnInit(): void {
		this.userId = this._tokenService.getTokenId()!;
		this.userRole = this._tokenService.getTokenRole()!;
		this.lastStatus = this.appointmentStatus;
	}

	onStatusChange(): void {
		const statusModel: AppointmentStatusUpdateModel = {
			Id: this.appointmentId,
			Status: this.appointmentStatus,
		};
		this._appointmentService
			.updateAppointment(statusModel)
			.pipe(take(1))
			.subscribe(statusChanged => {
				if (statusChanged) {
					this.lastStatus = this.appointmentStatus;
				} else {
					this.appointmentStatus = this.lastStatus;
				}
			});
	}
}
