import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentRegisterComponent } from './pages/appointment-register/appointment-register.component';
import { AppointmentSearchComponent } from './pages/appointment-search/appointment-search.component';


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
    path: 'cadastro',
    component: AppointmentRegisterComponent
  },
  ];
