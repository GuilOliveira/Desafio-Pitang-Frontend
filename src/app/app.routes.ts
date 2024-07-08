import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'consulta',
    component: AppointmentsComponent
  },
  {
    path: 'cadastro',
    component: RegisterComponent
  },
  ];
