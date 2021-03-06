import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TasksRoutes } from './tasks.routes';
import { FirebaseAsyncAppModule } from '../firebase/async';

@NgModule({
  imports: [
    TasksRoutes,
    FirebaseAsyncAppModule.initializeApp({
      apiKey: "AIzaSyAGOGfdD7CpBD7gvGIBBTUI50G0qoRNxmQ",
      authDomain: "reactivebase.firebaseapp.com",
      databaseURL: "https://reactivebase.firebaseio.com",
      storageBucket: "reactivebase.appspot.com",
      messagingSenderId: "52563936394"
    })
  ],
  exports: [ TasksComponent ],
  declarations: [ TasksComponent ]
})
export class TasksModule {}