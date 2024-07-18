import { HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const newReq = req.clone({
		setHeaders: {
			Authorization: `Bearer oi`,
		},
	});
	return next(newReq).pipe(
		catchError(error => {
			console.log(error);
			return throwError(() => error);
		})
	);
};
