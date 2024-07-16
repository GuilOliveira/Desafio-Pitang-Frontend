import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalNotificationComponent } from "../../components/shared/modal-notification/modal-notification.component";
import { ModalConfirmationComponent } from "../../components/shared/modal-confirmation/modal-confirmation.component";
import { ModalErrorMessageComponent } from "../../components/shared/modal-error-message/modal-error-message.component";

@Injectable({
	providedIn: "root",
})
export class ModalNotificationService {
	private dialog = inject(MatDialog);

	showNotification(title: string, message: string, isError: boolean): void {
		this.dialog.open(ModalNotificationComponent, {
			data: {
				title: title,
				message: message,
				isError: isError,
			},
		});
	}

	showErrorMessages(title: string, messages: string[]): void {
		this.dialog.open(ModalErrorMessageComponent, {
			data: {
				title: title,
				messages: messages,
			},
		});
	}

	showConfirmation(id: number): void {
		this.dialog.open(ModalConfirmationComponent, {
			data: {
				id: id,
			},
		});
	}
}
