import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { TokenService } from "../services/auth/token.service";

export const loggedGuard: CanActivateFn = () => {
	const _tokenService = inject(TokenService);
	const _router = inject(Router);
	if (_tokenService.getToken()) {
		_router.navigate([""]);
		return false;
	}
	return true;
};
