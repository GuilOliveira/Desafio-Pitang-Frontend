import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppointmentIconComponent } from '../appointment-icon/appointment-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, 
            MatButtonModule, 
            MatIconModule, 
            MatTabsModule, 
            RouterLink,
            RouterLinkActive,
            AppointmentIconComponent
          ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
