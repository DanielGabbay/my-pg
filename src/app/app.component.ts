import { Component, Renderer2 } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { GoogleTagManagerService } from "../lib/angular-google-tag-manager.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: [],
})
export class AppComponent {
  gtmId: string = '';

  constructor(private renderer: Renderer2) {}

  loadGTM() {
    this.clearGTM(); // Clear any existing GTM scripts

    const script = this.renderer.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=${this.gtmId}`;
    script.async = true;
    this.renderer.appendChild(document.head, script);

  script.addEventListener('load',(e)=>{
    debugger;
  })

    console.log(`GTM Loaded with ID: ${this.gtmId}`);
  }

  clearGTM() {
    const existingScripts = document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]');
    existingScripts.forEach((script) => {
      script.remove();
    });

    console.log('GTM scripts cleared');
  }

  simulateEvent(action: string, product: string) {
    const event = {
      event: action,
      ecommerce: {
        [action]: {
          products: [{ name: product }]
        }
      }
    };

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(event);

    console.log(`Simulated event: ${action} for ${product}`);
  }
}

// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'G-RBFCV9K8RK');