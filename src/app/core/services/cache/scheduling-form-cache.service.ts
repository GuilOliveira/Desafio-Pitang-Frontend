import { inject, Injectable } from "@angular/core";
import { LocalStorageService } from "../core/local-storage.service";
import { getEmptyScheduleForm, ScheduleFormModel } from "../../models/schedule/schedule-form-model";

@Injectable({
	providedIn: "root",
})
export class SchedulingFormCacheService {
	private _localStorage = inject(LocalStorageService);

	set(schedule: ScheduleFormModel): void {
		this._localStorage.set("schedule-form", schedule);
	}

	get(): ScheduleFormModel {
		const schedule = this._localStorage.get<ScheduleFormModel>("schedule-form");
		return schedule ? schedule : getEmptyScheduleForm();
	}
}
