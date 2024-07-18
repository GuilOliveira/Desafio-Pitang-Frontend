import { HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const newReq = req.clone({
		setHeaders: {
			Authorization: `Bearer oi`,
		},
	});
	return next(req).pipe(
		catchError(error => {
			console.log(error);
			return throwError(() => error);
		})
	);
};
