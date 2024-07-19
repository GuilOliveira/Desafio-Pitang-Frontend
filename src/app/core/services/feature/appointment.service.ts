import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, catchError, Observable, of, Subject, take, tap } from "rxjs";
import { AppointmentModel } from "../../models/appointment/appointment-model";
import { AppointmentStatusUpdateModel } from "../../models/appointment/appointment-status-update-model";
import { formatDate } from "@angular/common";
import { HttpResponse } from "@angular/common/http";
import { SnackbarMessageService } from "../notification/snackbar-message.service";

@Injectable({
	providedIn: "root",
})
export class AppointmentService {
	private _http = inject(HttpClient);
	private _notificationService = inject(SnackbarMessageService);
	private _apiUrl = "https://localhost:7136/api/Appointment";

	private updateResult$ = new Subject<boolean>();
	private deletedAppoinment = new Subject<number>();
	private cachedAppointments = new BehaviorSubject<AppointmentModel[][]>([[]]);
	private mustUpdateAppointments = true;
	deletedAppointment$ = this.deletedAppoinment.asObservable();

	private updateCachedAppointments(newAppointments: Observable<AppointmentModel[][]>): void {
		newAppointments
			.pipe(
				take(1),
				catchError(() => {
					this.ShouldUpdateAppointments();
					return of(this.cachedAppointments.getValue());
				})
			)
			.subscribe(response => {
				this.cachedAppointments.next(response);
			});
	}

	public ShouldUpdateAppointments(): void {
		this.mustUpdateAppointments = true;
	}

	public getAllAppointments(): Observable<AppointmentModel[][]> {
		if (!this.mustUpdateAppointments) return this.cachedAppointments;
		this.mustUpdateAppointments = false;
		const newAppointments = this._http.get<AppointmentModel[][]>(this._apiUrl + "/GetAll");
		this.updateCachedAppointments(newAppointments);
		return newAppointments;
	}

	public getFilteredAppointments(initialDate: Date, finalDate: Date): Observable<AppointmentModel[][]> {
		const endPoint = "/GetByDate";
		const initialDateFiltered: string = formatDate(initialDate, "yyyy-MM-dd", "en-US");
		const finalDateFiltered: string = formatDate(finalDate, "yyyy-MM-dd", "en-US");
		return this._http.get<AppointmentModel[][]>(
			this._apiUrl + endPoint + `?initialDate=${initialDateFiltered}&finalDate=${finalDateFiltered}`
		);
	}

	public updateAppointment(statusModel: AppointmentStatusUpdateModel): Observable<boolean> {
		const endPoint = "/Update/Status";

		this._http
			.patch<AppointmentModel>(this._apiUrl + endPoint, statusModel, {
				observe: "response",
			})
			.pipe(
				take(1),
				tap({
					next: (response: HttpResponse<AppointmentModel>) => {
						if (response.status == 200) {
							this.ShouldUpdateAppointments();
							this._notificationService.showMessage("O status do agendamento foi mudado com sucesso.");
							this.updateResult$.next(true);
						}
					},
					error: () => {
						this._notificationService.showMessage("Houve um erro ao mudar o status do agendamento");
						this.updateResult$.next(false);
					},
				})
			)
			.subscribe();
		return this.updateResult$.asObservable();
	}

	public deleteAppointment(id: number): void {
		const endPoint = "/Delete";

		this._http
			.delete<null>(this._apiUrl + endPoint + `?id=${id}`, {
				observe: "response",
			})
			.pipe(
				take(1),
				tap({
					next: (response: HttpResponse<null>) => {
						if (response.status == 204) {
							this.deletedAppoinment.next(id);
							this._notificationService.showMessage("O agendamento foi excluído com sucesso.");
							this.ShouldUpdateAppointments();
						}
					},
					error: () => {
						this._notificationService.showMessage("Houve um erro ao excluir o agendamento");
					},
				})
			)
			.subscribe();
	}
}
