import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BasicAppointmentModel } from '../models/basic-appointment-model';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  constructor() { }
  private _http = inject(HttpClient);
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
}
