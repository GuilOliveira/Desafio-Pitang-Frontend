import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./core/components/shared/header/header.component";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { LoadingComponent } from "./core/components/shared/loading/loading.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, LoadingComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
	providers: [{ provide: MAT_DATE_LOCALE, useValue: "pt-BR" }],
})
export class AppComponent {}
