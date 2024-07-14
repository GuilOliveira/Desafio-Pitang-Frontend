import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalNotificationComponent } from '../../components/shared/modal-notification/modal-notification.component';

@Injectable({
  providedIn: 'root'
})
export class ModalNotificationService {
  private dialog = inject(MatDialog);

  showNotification(title: string, message:string, isError:boolean):void{
    this.dialog.open(ModalNotificationComponent,{
      data:
      {
        title: title,
        message: message,
        isError: isError
      }
    })
  }

  constructor() { }
}
