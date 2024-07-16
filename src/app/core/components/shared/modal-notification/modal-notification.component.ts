import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { ModalNotificationService } from "../../../services/notification/modal-notification.service";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-modal-notification",
	standalone: true,
	imports: [MatDialogModule, MatButtonModule, MatIconModule],
	templateUrl: "./modal-notification.component.html",
	styleUrl: "./modal-notification.component.scss",
})
export class ModalNotificationComponent {
	private dialogRef = inject(MatDialogRef<ModalNotificationComponent>);
	private _modalService = inject(ModalNotificationService);

	data = inject(MAT_DIALOG_DATA);

	close(): void {
		this.dialogRef.close();
	}
}
