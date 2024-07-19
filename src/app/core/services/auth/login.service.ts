import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, take, tap } from "rxjs";
import { TokenModel } from "../../models/auth/token-model";
import { ErrorResponseModel } from "../../models/error/error-response-model";
import { ModalNotificationService } from "../notification/modal-notification.service";
import { Router } from "@angular/router";
import { TokenService } from "./token.service";

@Injectable({
	providedIn: "root",
})
export class LoginService {
	private _http = inject(HttpClient);
	private _modalService = inject(ModalNotificationService);
	private _router = inject(Router);
	private _tokenService = inject(TokenService);

	private isLogged = new BehaviorSubject<boolean>(false);
	isLogged$ = this.isLogged.asObservable();
	private url = "/api/Authentication/Login";

	constructor() {
		this.checkLogged();
	}

	login(email: string, password: string): void {
		this._http
			.get<TokenModel>(this.url + `?email=${email}&password=${password}`)
			.pipe(
				take(1),
				tap({
					next: (response: TokenModel) => {
						if (response.token) {
							this._tokenService.setTokens(response);
							this.isLogged.next(true);
							this._router.navigate(["/"]);
							this._tokenService.decodeToken();
						}
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

	logout(): void {
		this._tokenService.clearTokens();
		this.isLogged.next(false);
		this._router.navigate(["autenticar"]);
	}
	private checkLogged(): void {
		if (this._tokenService.getToken() != null) {
			this.isLogged.next(true);
			return;
		}
		this.isLogged.next(false);
	}
}
