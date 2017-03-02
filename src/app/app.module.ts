import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken, Injectable } from '@angular/core';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
