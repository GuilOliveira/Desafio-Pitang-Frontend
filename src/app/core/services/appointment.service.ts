import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subject, take, tap } from 'rxjs';
import { AppointmentModel } from '../models/appointment-model';
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

  private updateResult$ = new Subject<boolean>();

  public getAllAppointments(): Observable<AppointmentModel[][]> {
    const endPoint: string = "/GetAll";
    return this._http.get<AppointmentModel[][]>(this._apiUrl+endPoint);
  }

  public getFilteredAppointments(initialDate: Date, finalDate: Date): Observable<AppointmentModel[][]> {
    const endPoint: string = "/GetByDate"
    const initialDateFiltered: string = formatDate(initialDate, 'yyyy-MM-dd', 'en-US');
    const finalDateFiltered: string = formatDate(finalDate, 'yyyy-MM-dd', 'en-US');
    return this._http.get<AppointmentModel[][]>(this._apiUrl+endPoint+
      `?initialDate=${initialDateFiltered}&finalDate=${finalDateFiltered}`);
  }

  public updateAppointment(statusModel: AppointmentStatusUpdateModel):Observable<boolean>{
    const endPoint: string = "/Update/Status"
    
    this._http.patch<AppointmentModel>(this._apiUrl+endPoint, statusModel, { observe: 'response' })
    .pipe(take(1),
      tap({
        next: (response: HttpResponse<AppointmentModel>) =>{
          if(response.status==200){
            this.updateResult$.next(true)
          }else{
            this.updateResult$.next(false)
          }
        },error: (error) =>{
          this.updateResult$.next(false)
        }
      })).subscribe()
      
      return this.updateResult$.asObservable()
  }
}
