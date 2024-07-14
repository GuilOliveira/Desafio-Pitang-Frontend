import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../core/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentIconNotificationService {
  private _localStorage = inject(LocalStorageService)
  private notificationCounter = new BehaviorSubject<number>(0)
  notificationCounter$ = this.notificationCounter.asObservable()
  
  get():number{
    const value = this._localStorage.get<any>("appointmentsMade")
    return value ? parseInt(value) : 0
  }

  add():void{
    const newValue: number = this.get()+1
    this._localStorage.set("appointmentsMade", newValue)
    this.notificationCounter.next(newValue)
  }
  
  constructor() {
    this.notificationCounter.next(this.get())
   }
}
