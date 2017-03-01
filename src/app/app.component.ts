import { Component, Inject } from '@angular/core';
import { FirebaseApp } from './firebase/app';
import { FirebaseAuth } from './firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(app: FirebaseApp, auth: FirebaseAuth) {
    console.log('App loaded: ', app);
    console.log('Auth ', auth);
    // console.log('Auth loaded: ', app.auth());
    // console.log('Database loaded: ', app.database());
  }
}
