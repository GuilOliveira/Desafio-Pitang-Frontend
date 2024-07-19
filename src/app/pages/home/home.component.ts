import { Component, inject, OnInit } from "@angular/core";
import { LoginService } from "../../core/services/auth/login.service";
import { TokenService } from "../../core/services/auth/token.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
	private _loginService = inject(LoginService);
	private _tokenService = inject(TokenService);
	isLogged!: boolean;
	name!: string;

	logout() {
		this._loginService.logout();
	}

	ngOnInit(): void {
		this._loginService.isLogged$.subscribe(logged => {
			this.isLogged = logged;
		});
		this.name = this._tokenService.getTokenName()!;
	}
}
