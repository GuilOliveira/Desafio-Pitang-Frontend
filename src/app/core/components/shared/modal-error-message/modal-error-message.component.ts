import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { ModalNotificationService } from "../../../services/notification/modal-notification.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
	selector: "app-modal-error-message",
	standalone: true,
	imports: [MatDialogModule, MatIconModule, MatButtonModule],
	templateUrl: "./modal-error-message.component.html",
	styleUrl: "./modal-error-message.component.scss",
})
export class ModalErrorMessageComponent {
	private dialogRef = inject(MatDialogRef<ModalErrorMessageComponent>);
	private _modalService = inject(ModalNotificationService);

	data = inject(MAT_DIALOG_DATA);

	close(): void {
		console.log(this.data.messages);
		this.dialogRef.close();
	}
}
