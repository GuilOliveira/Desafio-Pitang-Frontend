import { Component, inject, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ModalNotificationService } from "../../../../services/notification/modal-notification.service";

@Component({
	selector: "app-delete-appointment-button",
	standalone: true,
	imports: [MatIconModule, MatButtonModule],
	templateUrl: "./delete-appointment-button.component.html",
	styleUrl: "./delete-appointment-button.component.scss",
})
export class DeleteAppointmentButtonComponent {
	private _modalComponent = inject(ModalNotificationService);
	@Input() id!: number;

	deleteClicked(): void {
		this._modalComponent.showConfirmation(this.id);
	}
}
