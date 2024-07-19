import { Component, inject, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ModalNotificationService } from "../../../../services/notification/modal-notification.service";
import { TokenService } from "../../../../services/auth/token.service";

@Component({
	selector: "app-delete-appointment-button",
	standalone: true,
	imports: [MatIconModule, MatButtonModule],
	templateUrl: "./delete-appointment-button.component.html",
	styleUrl: "./delete-appointment-button.component.scss",
})
export class DeleteAppointmentButtonComponent implements OnInit {
	private _modalComponent = inject(ModalNotificationService);
	private _tokenService = inject(TokenService);

	@Input() id!: number;
	@Input() creatorId!: number;
	userId!: number;
	userRole!: string;

	ngOnInit(): void {
		this.userId = this._tokenService.getTokenId()!;
		this.userRole = this._tokenService.getTokenRole()!;
	}
	deleteClicked(): void {
		this._modalComponent.showConfirmation(this.id);
	}
}
