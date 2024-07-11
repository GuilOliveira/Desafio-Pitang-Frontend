import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BasicAppointmentModel } from '../models/basic-appointment-model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  constructor() { }
  private _http = inject(HttpClient);
  private _apiUrl = "https://localhost:7136/Appointment/GetAll";

  public getAllAppointments(): Observable<BasicAppointmentModel[][]> {
    return this._http.get<BasicAppointmentModel[][]>(this._apiUrl);
  }
}
