import { Component, inject } from '@angular/core';
import { LoadingService } from '../../../services/core/loading.service';
import { AsyncPipe } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [AsyncPipe, MatProgressBar],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  private _loadingService = inject(LoadingService);
  loading$ = this._loadingService.loading$;
  
}
