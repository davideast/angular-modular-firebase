import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken, Injectable } from '@angular/core';
import { FirebaseAppModule } from './firebase/app';
import { FirebaseAuthModule } from './firebase/auth';
import { FirebaseDatabaseModule } from './firebase/database';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { UsercardComponent } from './usercard/usercard.component';
import { UserCardList } from './usercardlist/usercardlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UsercardComponent,
    UserCardList
  ],
  imports: [
    BrowserModule,
    AppRoutes,
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
