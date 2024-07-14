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
    return parseInt(this._localStorage.get("appointmentsMade"));
  }

  add():void{
    if (!this.get()) this._localStorage.set("appointmentsMade", 0)
    const newValue: number = this.get()+1
    this._localStorage.set("appointmentsMade", newValue)
    this.notificationCounter.next(newValue)
  }
  
  constructor() {
    this.notificationCounter.next(this.get())
   }
}
