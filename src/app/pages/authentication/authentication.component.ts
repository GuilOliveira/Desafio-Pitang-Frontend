import { Component } from "@angular/core";
import { AuthTabsComponent } from "../../core/components/feature/auth/auth-tabs/auth-tabs.component";

@Component({
	selector: "app-authentication",
	standalone: true,
	imports: [AuthTabsComponent],
	templateUrl: "./authentication.component.html",
	styleUrl: "./authentication.component.scss",
})
export class AuthenticationComponent {}
