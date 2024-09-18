import { Component, ViewChild, AfterViewInit, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@khmyznikov/pwa-install';

/* 

Add this:
"types": [
       "dom-chromium-installation-events",
       "web-app-manifest"
]
into tsconfig.app.json

Add this: 
schemas: [CUSTOM_ELEMENTS_SCHEMA]
into your app NgModule

*/

@Component({
  selector: 'pwa-install-component',
  standalone:true,
  templateUrl: './pwa-install.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PwaInstallComponent {
  @ViewChild('pwaInstall') pwaInstall!: ElementRef;

  // just for sample
  public name = 'My PWA';
  public eventHandle = (event: any) => {
    console.log(event);
  };

  public show(): void {
    this.pwaInstall.nativeElement.showDialog(true);
  }
  public apple(): void {
    // this should be readonly, just for test
    this.pwaInstall.nativeElement.isAppleMobilePlatform = true;

  }
}