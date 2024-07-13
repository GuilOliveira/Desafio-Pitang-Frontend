import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ScheduleModel } from '../models/schedule-model';
import { getEmptyScheduleForm, ScheduleFormModel } from '../models/schedule-form-model';
import { BehaviorSubject, Observable, Subject, take, tap } from 'rxjs';
import { AppointmentModel } from '../models/appointment-model';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  private _http = inject(HttpClient);
  private _apiUrl: string = "https://localhost:7136/api/Scheduling";

  private postResult$ = new Subject<boolean>();
  private schedulingForm$ = new BehaviorSubject<ScheduleFormModel>(getEmptyScheduleForm())

  postScheduling(scheduling: ScheduleModel):Observable<boolean>{
    const endPoint: string = "/Register";
    this._http.post<AppointmentModel>(this._apiUrl+endPoint, scheduling, {observe: "response"})
    .pipe(take(1),
    tap({
      next: (response: HttpResponse<AppointmentModel>)=>{
        if(response.status==200){
          console.log("foi")
          this.postResult$.next(true)
        }else{
          console.log("erro")
          this.postResult$.next(false)
        }
      },error: (error) =>{
        console.log("erro")
        this.postResult$.next(false)
      }
    })
    ).subscribe();

    return this.postResult$.asObservable()
  }

  updateSchedulingCache(scheduling: ScheduleFormModel):void{
    this.schedulingForm$.next(scheduling);
  }

  getScheduleCache():ScheduleFormModel{
    return this.schedulingForm$.getValue();
  }


  constructor() {}
}
