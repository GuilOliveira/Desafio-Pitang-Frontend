import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { BasicAppointmentModel } from '../models/basic-appointment-model';
import { AppointmentStatusUpdateModel } from '../models/appointment-status-update-model';
import { formatDate } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  constructor() { }
  private _http = inject(HttpClient);
  private _notificationService = inject(NotificationService)
  private _apiUrl: string = "https://localhost:7136/api/Appointment";

  public getAllAppointments(): Observable<BasicAppointmentModel[][]> {
    const endPoint: string = "/GetAll"
    return this._http.get<BasicAppointmentModel[][]>(this._apiUrl+endPoint);
  }

  public getFilteredAppointments(initialDate: Date, finalDate: Date): Observable<BasicAppointmentModel[][]> {
    const endPoint: string = "/GetByDate"
    const initialDateFiltered: string = formatDate(initialDate, 'yyyy-MM-dd', 'en-US');
    const finalDateFiltered: string = formatDate(finalDate, 'yyyy-MM-dd', 'en-US');
    return this._http.get<BasicAppointmentModel[][]>(this._apiUrl+endPoint+
      `?initialDate=${initialDateFiltered}&finalDate=${finalDateFiltered}`);
  }

  public updateAppointment(statusModel: AppointmentStatusUpdateModel):void{
    const endPoint: string = "/Update/Status"
    
    this._http.patch<BasicAppointmentModel>(this._apiUrl+endPoint, statusModel, { observe: 'response' }).pipe(take(1))
    .subscribe((response: HttpResponse<BasicAppointmentModel>) => {
      this._notificationService.showMessage("O status do agendamento foi mudado com sucesso.")
    },error =>{
      this._notificationService.showMessage("Houve um erro ao mudar o status do agendamento")
    })
  }
}
