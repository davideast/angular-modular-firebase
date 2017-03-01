import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken, Injectable } from '@angular/core';
import { FirebaseAppModule } from './firebase';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirebaseAppModule.initializeApp({
      apiKey: "AIzaSyAGOGfdD7CpBD7gvGIBBTUI50G0qoRNxmQ",
      authDomain: "reactivebase.firebaseapp.com",
      databaseURL: "https://reactivebase.firebaseio.com",
      storageBucket: "reactivebase.appspot.com",
      messagingSenderId: "52563936394"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
