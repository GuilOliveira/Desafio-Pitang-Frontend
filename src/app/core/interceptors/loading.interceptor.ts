import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { finalize } from "rxjs";
import { LoadingService } from "../services/core/loading.service";

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
	const _loading = inject(LoadingService);
	_loading.show();

	return next(req).pipe(finalize(() => _loading.hide()));
};
