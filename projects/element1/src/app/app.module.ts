import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const element1 = createCustomElement(AppComponent,
      { injector: this.injector });
    customElements.define('my-element1', element1);
  }
}
