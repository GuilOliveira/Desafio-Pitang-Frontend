import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { LoginService } from "../services/auth/login.service";
import { TokenService } from "../services/auth/token.service";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const authGuard: CanActivateFn = (route, state) => {
	const _loginService = inject(LoginService);
	const _tokenService = inject(TokenService);
	if (!_tokenService.getToken()) {
		_loginService.logout();
		return false;
	}
	return true;
};
