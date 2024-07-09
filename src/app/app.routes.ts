import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentSearchComponent } from './pages/appointment-search/appointment-search.component';
import { AppointmentScheduleComponent } from './pages/appointment-schedule/appointment-schedule.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'consulta',
    component: AppointmentSearchComponent
  },
  {
    path: 'agendamento',
    component: AppointmentScheduleComponent
  },
  ];
