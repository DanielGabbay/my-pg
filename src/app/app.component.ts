import { Component, Renderer2 } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { GoogleTagManagerService } from "../lib/angular-google-tag-manager.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PwaInstallComponent } from "./pwa-install/pwa-install.component";

export type IGTMDataLayer = {
  event: string;
  [key: string]: any;
};

declare global {
  interface Window {
    dataLayer: any[] | null;
  }
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, PwaInstallComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: [],
})
export class AppComponent {

  constructor(){}
}

