import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { UserRegistrationModel } from "../../models/user/user-registration-model";
import { take, tap } from "rxjs";
import { ModalNotificationService } from "../notification/modal-notification.service";
import { ErrorResponseModel } from "../../models/error/error-response-model";

@Injectable({
	providedIn: "root",
})
export class RegisterService {
	private _http = inject(HttpClient);
	private url = "/api/User/Register";
	private _modalService = inject(ModalNotificationService);

	register(userModel: UserRegistrationModel): void {
		this._http
			.post(this.url, userModel)
			.pipe(
				take(1),
				tap({
					next: () => {
						this._modalService.showNotification(
							"Usuário cadastrado com sucesso!",
							"O usuário foi cadastrado com sucesso!",
							false
						);
					},
					error: error => {
						if (error.status == 400) {
							const errorResponse = error.error as ErrorResponseModel;
							this._modalService.showErrorMessages("Ocorreu um erro!", errorResponse.Messages);
						} else
							this._modalService.showNotification(
								"Ocorreu um erro!",
								"Houve um erro ao tentar cadastrar o usuário.",
								true
							);
					},
				})
			)
			.subscribe();
	}
}
