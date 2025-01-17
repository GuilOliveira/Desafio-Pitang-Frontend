import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoginService } from "../services/auth/login.service";
import { switchMap, catchError, throwError } from "rxjs";
import { TokenService } from "../services/auth/token.service";
import { ModalNotificationService } from "../services/notification/modal-notification.service";

const urlIgnore = [
	"/api/Authentication/Login",
	"/api/User/Register",
	"/api/Appointment/GetAll",
	"/api/Appointment/GetByDate",
	"/api/Authentication/RefreshToken",
];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const shouldIgnore = urlIgnore.some(ignoreUrl => req.url.includes(ignoreUrl));

	if (shouldIgnore) {
		return next(req);
	}

	const _loginService = inject(LoginService);
	const _tokenService = inject(TokenService);
	const _modalService = inject(ModalNotificationService);
	const bearer = "Bearer " + _tokenService.getToken();
	const newReq = req.clone({
		setHeaders: {
			Authorization: bearer,
		},
	});

	return next(newReq).pipe(
		catchError(error => {
			if (error.status == 401) {
				return _tokenService.refreshToken().pipe(
					switchMap(refreshToken => {
						_tokenService.setTokens(refreshToken);
						const newRequest = req.clone({
							setHeaders: {
								Authorization: `Bearer ${refreshToken.token}`,
							},
						});
						return next(newRequest);
					}),
					catchError(refreshError => {
						_loginService.logout();
						_modalService.closeAllModals();
						_modalService.showNotification(
							"Sessão expirada!",
							"Sua sessão expirou, faça login novamente para poder continuar",
							true
						);
						return throwError(() => refreshError);
					})
				);
			}
			return throwError(() => error);
		})
	);
};
