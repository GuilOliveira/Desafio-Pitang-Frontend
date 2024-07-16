import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private totalRequests = 0;
  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();

  show():void{
    this.totalRequests++;
    if(this.totalRequests === 1) this.loading.next(true);
  }

  hide():void{
    this.totalRequests--;
    this.loading.next(false)
  }
}
