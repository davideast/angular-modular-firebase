import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken, Injectable } from '@angular/core';
import { FirebaseAppModule } from './firebase/app';
import { FirebaseAuthModule } from './firebase/auth';
import { FirebaseDatabaseModule } from './firebase/database';

import { AppComponent } from './app.component';
import { UsercardComponent } from './usercard/usercard.component';
import { UsercardlistComponent } from './usercardlist/usercardlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UsercardComponent,
    UsercardlistComponent
  ],
  imports: [
    BrowserModule,
    FirebaseAppModule.initializeApp({
      apiKey: "AIzaSyAGOGfdD7CpBD7gvGIBBTUI50G0qoRNxmQ",
      authDomain: "reactivebase.firebaseapp.com",
      databaseURL: "https://reactivebase.firebaseio.com",
      storageBucket: "reactivebase.appspot.com",
      messagingSenderId: "52563936394"
    }),
    FirebaseAuthModule,
    FirebaseDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
