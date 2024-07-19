import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AppointmentSearchComponent } from "./pages/appointment-search/appointment-search.component";
import { AppointmentScheduleComponent } from "./pages/appointment-schedule/appointment-schedule.component";
import { authGuard } from "./core/guards/auth.guard";
import { AuthenticationComponent } from "./pages/authentication/authentication.component";
import { loggedGuard } from "./core/guards/logged.guard";
import { AppointmentSearchUserComponent } from "./pages/appointment-search-user/appointment-search-user.component";

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "consulta",
		component: AppointmentSearchComponent,
	},
	{
		path: "agendamento",
		component: AppointmentScheduleComponent,
		canActivate: [authGuard],
	},
	{
		path: "autenticar",
		component: AuthenticationComponent,
		canActivate: [loggedGuard],
	},
	{
		path: "consultasUsuario",
		component: AppointmentSearchUserComponent,
		canActivate: [authGuard],
	},
	{
		path: "**",
		redirectTo: "/",
	},
];
