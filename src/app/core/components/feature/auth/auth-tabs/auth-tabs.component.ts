import { Component } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

@Component({
	selector: "app-auth-tabs",
	standalone: true,
	imports: [MatTabsModule, LoginComponent, RegisterComponent],
	templateUrl: "./auth-tabs.component.html",
	styleUrl: "./auth-tabs.component.scss",
})
export class AuthTabsComponent {}
