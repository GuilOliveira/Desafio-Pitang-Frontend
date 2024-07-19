import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LocalStorageService } from "../core/local-storage.service";
import { TokenModel } from "../../models/auth/token-model";
import { Observable } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { DecodedTokenModel } from "../../models/auth/decoded-token-model";

@Injectable({
	providedIn: "root",
})
export class TokenService {
	private _http = inject(HttpClient);
	private _localStorage = inject(LocalStorageService);

	private getRefreshToken(): string | null {
		return this._localStorage.get("refreshToken");
	}

	getToken(): string | null {
		return this._localStorage.get("token");
	}

	setTokens(tokenModel: TokenModel): void {
		this._localStorage.set("token", tokenModel.token);
		this._localStorage.set("refreshToken", tokenModel.refreshToken);
	}

	clearTokens(): void {
		this._localStorage.remove("token");
		this._localStorage.remove("refreshToken");
	}

	refreshToken(): Observable<TokenModel> {
		const headers = new HttpHeaders({
			Authorization: "Bearer " + this.getRefreshToken(),
			"Content-Type": "application/json",
		});
		return this._http.get<TokenModel>("/api/Authentication/RefreshToken", { headers });
	}

	decodeToken(): DecodedTokenModel | null {
		if (!this.getToken()) return null;
		return jwtDecode<DecodedTokenModel>(this.getToken()!);
	}

	getTokenId(): number | null {
		const decodedToken = this.decodeToken();

		if (decodedToken) {
			return parseInt(decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"]!);
		}
		return null;
	}

	getTokenRole(): string | null {
		const decodedToken = this.decodeToken();

		if (decodedToken) {
			return decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]!;
		}
		return null;
	}

	getTokenName(): string | null {
		const decodedToken = this.decodeToken();

		if (decodedToken) {
			return decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]!;
		}
		return null;
	}
}
