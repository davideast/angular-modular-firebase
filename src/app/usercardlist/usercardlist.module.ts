
import { NgModule } from '@angular/core';
import { UserCardList } from './usercardlist.component';
import { UserCardListRoutes } from './usercardlist.routes';
import { FirebaseAsyncAppModule } from '../firebase/async';

@NgModule({
  imports: [
    UserCardListRoutes,
    FirebaseAsyncAppModule.initializeApp({
      apiKey: "AIzaSyAGOGfdD7CpBD7gvGIBBTUI50G0qoRNxmQ",
      authDomain: "reactivebase.firebaseapp.com",
      databaseURL: "https://reactivebase.firebaseio.com",
      storageBucket: "reactivebase.appspot.com",
      messagingSenderId: "52563936394"
    })
  ],
  exports: [ UserCardList ],
  declarations: [ UserCardList ]
})
export class UserCardListModule {}