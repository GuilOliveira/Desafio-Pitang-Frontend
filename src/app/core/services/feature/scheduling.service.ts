import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ScheduleModel } from '../../models/schedule-model';
import { getEmptyScheduleForm, ScheduleFormModel } from '../../models/schedule-form-model';
import { BehaviorSubject, Observable, Subject, take, tap } from 'rxjs';
import { AppointmentModel } from '../../models/appointment-model';
import { ModalNotificationService } from '../notification/modal-notification.service';
import { AppointmentIconNotificationService } from '../cache/appointment-icon-notification.service';
import { SchedulingFormCacheService } from '../cache/scheduling-form-cache.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  private _http = inject(HttpClient);
  private _modalService = inject(ModalNotificationService)
  private _iconNotification = inject(AppointmentIconNotificationService)
  private _formCacheService = inject(SchedulingFormCacheService)
  private _apiUrl: string = "https://localhost:7136/api/Scheduling";

  private postResult$ = new Subject<boolean>();
  private schedulingForm$ = new BehaviorSubject<ScheduleFormModel>(this._formCacheService.get())

  postScheduling(scheduling: ScheduleModel):Observable<boolean>{
    const endPoint: string = "/Register";
    this._http.post<AppointmentModel>(this._apiUrl+endPoint, scheduling, {observe: "response"})
    .pipe(take(1),
    tap({
      next: (response: HttpResponse<AppointmentModel>)=>{
        if(response.status==200){
          this.postResult$.next(true)
          this._modalService.showNotification("Consulta agendada!","Sua consulta foi agendada com sucesso!",false)
          this._iconNotification.add() 
        }else{
          this.postResult$.next(false)
          this._modalService.showNotification("Ocorreu um erro!","Houve um erro ao tentar agendar sua consulta.",true)
        }
      },error: (error) =>{
        this.postResult$.next(false)
        this._modalService.showNotification("Ocorreu um erro!","Houve um erro ao tentar agendar sua consulta.",true)

      }
    })
    ).subscribe();

    return this.postResult$.asObservable()
  }

  updateSchedulingCache(scheduling: ScheduleFormModel):void{
    this.schedulingForm$.next(scheduling);
    this._formCacheService.set(scheduling);
  }

  getScheduleCache():ScheduleFormModel{
    return this.schedulingForm$.getValue();
  }


  constructor() {}
}