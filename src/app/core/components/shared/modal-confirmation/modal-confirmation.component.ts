import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AppointmentService } from "../../../services/feature/appointment.service";

@Component({
	selector: "app-modal-confirmation",
	standalone: true,
	imports: [MatDialogModule, MatButtonModule, MatIconModule],
	templateUrl: "./modal-confirmation.component.html",
	styleUrl: "./modal-confirmation.component.scss",
})
export class ModalConfirmationComponent {
	private dialogRef = inject(MatDialogRef<ModalConfirmationComponent>);
	private _appointmentService = inject(AppointmentService);

	data = inject(MAT_DIALOG_DATA);

	close(): void {
		this.dialogRef.close();
	}
	delete(): void {
		this._appointmentService.deleteAppointment(this.data.id);
		this.close();
	}
}
